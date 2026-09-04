const baseUrl = new URL("assets/sample-map/rosengarten-base.pmtiles", window.location.href).href;
const terrainUrl = new URL("assets/sample-map/rosengarten-terrain.pmtiles", window.location.href).href;
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const routePoints = [
  [11.54574, 46.432267],
  [11.5894, 46.4433],
  [11.612015, 46.44233],
  [11.614615, 46.415716],
  [11.591893, 46.407956],
  [11.57515, 46.40934]
];

const routePois = [
  ["1", "Nova Levante", routePoints[0]],
  ["2", "Malga Frommer", routePoints[1]],
  ["3", "Kölner Hütte", routePoints[2]],
  ["4", "Paolina", routePoints[3]],
  ["5", "Carezza", routePoints[4]],
  ["6", "Karersee", routePoints[5]]
];

const cableCoords = [routePoints[0], [11.588833, 46.444191], routePoints[1], routePoints[2]];
const trailCoords = [
  routePoints[2], [11.612508, 46.440693], [11.612766, 46.437816],
  [11.612042, 46.435521], [11.612287, 46.431701], [11.611694, 46.427693],
  [11.613866, 46.424607], [11.614476, 46.421512], [11.616147, 46.419603],
  [11.615861, 46.416863], routePoints[3]
];
const carCoords = [routePoints[4], [11.591756, 46.408032], [11.591228, 46.407857], routePoints[5]];

const baseLayers = basemaps.layers("protomaps", basemaps.namedFlavor("light"), { lang: "en" });
const firstLabelIndex = baseLayers.findIndex(layer => layer.type === "symbol");
baseLayers.splice(firstLabelIndex < 0 ? baseLayers.length : firstLabelIndex, 0, {
  id: "terrain-hillshade",
  type: "hillshade",
  source: "terrain-shade",
  paint: {
    "hillshade-method": "multidirectional",
    "hillshade-shadow-color": "#20372f",
    "hillshade-highlight-color": "#fff9e9",
    "hillshade-accent-color": "#6f7869",
    "hillshade-exaggeration": 0.38
  }
});

const map = new maplibregl.Map({
  container: "sampleMap",
  center: [11.58, 46.425],
  zoom: 11.85,
  pitch: 42,
  bearing: -10,
  maxPitch: 60,
  minZoom: 11,
  // Mapterhorn's regional terrain archive has native detail through z15.
  // Stopping here avoids enlarging DEM pixels past their source resolution.
  maxZoom: 15,
  attributionControl: false,
  style: {
    version: 8,
    glyphs: "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
    sprite: "https://protomaps.github.io/basemaps-assets/sprites/v4/light",
    sources: {
      protomaps: {
        type: "vector",
        url: `pmtiles://${baseUrl}`,
        attribution: "© OpenStreetMap contributors · Protomaps"
      },
      terrain: {
        type: "raster-dem",
        url: `pmtiles://${terrainUrl}`,
        encoding: "terrarium",
        tileSize: 512,
        attribution: "Terrain © Mapterhorn"
      },
      "terrain-shade": {
        type: "raster-dem",
        url: `pmtiles://${terrainUrl}`,
        encoding: "terrarium",
        tileSize: 512
      }
    },
    layers: baseLayers,
    terrain: { source: "terrain", exaggeration: 1.12 },
    sky: {
      "sky-color": "#d9e4df",
      "horizon-color": "#f6f0df",
      "fog-color": "#e8ece6",
      "sky-horizon-blend": 0.45,
      "horizon-fog-blend": 0.35,
      "fog-ground-blend": 0.5,
      "atmosphere-blend": 0.6
    }
  }
});

map.addControl(new maplibregl.NavigationControl({ showCompass: true }), "bottom-right");
map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");

function lineFeature(coords) {
  return { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: coords } };
}

function addRouteLine(id, coords, color, dasharray) {
  map.addSource(id, { type: "geojson", data: lineFeature(coords) });
  map.addLayer({
    id: `${id}-halo`, type: "line", source: id,
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "rgba(255,255,255,.9)", "line-width": 7, "line-opacity": .9 }
  });
  map.addLayer({
    id, type: "line", source: id,
    layout: { "line-cap": "round", "line-join": "round" },
    paint: {
      "line-color": color,
      "line-width": 3.6,
      "line-opacity": .96,
      ...(dasharray ? { "line-dasharray": dasharray } : {})
    }
  });
}

map.on("load", () => {
  addRouteLine("cable-route", cableCoords, "#3d91b9");
  addRouteLine("trail-route", trailCoords, "#e05a4e");
  addRouteLine("car-route", carCoords, "#4e9d73", [1.1, 1.2]);

  routePois.forEach(([number, name, coords]) => {
    const marker = document.createElement("div");
    marker.className = "route-marker";
    marker.textContent = number;
    marker.setAttribute("aria-label", `${number}. ${name}`);
    new maplibregl.Marker({ element: marker, anchor: "center" })
      .setLngLat(coords)
      .setPopup(new maplibregl.Popup({ offset: 18 }).setText(name))
      .addTo(map);
  });

  document.querySelector("#sampleStatus").classList.add("ready");
});

document.querySelectorAll(".map-mode button").forEach(button => {
  button.addEventListener("click", () => {
    const terrainMode = button.dataset.mode === "terrain";
    document.querySelectorAll(".map-mode button").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    map.setTerrain(terrainMode ? { source: "terrain", exaggeration: 1.12 } : null);
    map.setLayoutProperty("terrain-hillshade", "visibility", terrainMode ? "visible" : "none");
    map.easeTo({ pitch: terrainMode ? 42 : 0, bearing: terrainMode ? -10 : 0, duration: 650 });
  });
});

map.on("error", event => {
  console.error("Map sample error", event.error || event);
  const status = document.querySelector("#sampleStatus");
  status.textContent = "지도를 불러오지 못했습니다.";
  status.classList.remove("ready");
});
