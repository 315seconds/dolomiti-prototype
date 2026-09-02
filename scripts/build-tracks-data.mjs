import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const trackConfigs = [
  {
    key: "rosengarten",
    file: "day-01-rosengarten.gpx",
    source: "Outdooractive · Geotrail 9 to Karersee/Carezza via Kuregg/Monte Coronelle"
  },
  {
    key: "marmolada",
    file: "day-02-alba-viel-sass-pordoi.gpx",
    source: "Outdooractive · 사용자 제작 · Alba → Fredarola → Viel dal Pan 왕복 → Passo Pordoi → Sass Pordoi"
  },
  {
    key: "cinqueTorri",
    file: "day-05-scoiattoli-averau.gpx",
    source: "5 Torri · Scoiattoli → Averau"
  },
  {
    key: "treCime",
    file: "day-06-tre-cime.gpx",
    source: "Trecime Trek · Tre Cime di Lavaredo circuit"
  }
];

function parseGpxCoords(gpx) {
  return [...gpx.matchAll(/<trkpt\b[^>]*\blat="([^"]+)"[^>]*\blon="([^"]+)"/g)]
    .map(([, lat, lon]) => [Number(lat), Number(lon)])
    .filter(([lat, lon]) => Number.isFinite(lat) && Number.isFinite(lon));
}

const builtInTracks = {};
for (const config of trackConfigs) {
  const gpxPath = path.join(projectRoot, "assets", "tracks", config.file);
  const coords = parseGpxCoords(await readFile(gpxPath, "utf8"));
  if (coords.length < 2) throw new Error(`${config.file}: 트랙 포인트가 부족합니다.`);
  builtInTracks[config.key] = {
    name: config.file,
    source: config.source,
    coords
  };
}

const output = `window.builtInTracks = ${JSON.stringify(builtInTracks)};\n`;
await writeFile(path.join(projectRoot, "tracks-data.js"), output);
