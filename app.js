const colors = {
  trail: "#d85149",
  cable: "#4b9ecf",
  lift: "#4b9ecf",
  bus: "#7c3aed",
  car: "#57a575"
};

const labels = {
  all: "전체",
  trail: "트레킹",
  cable: "케이블카",
  lift: "리프트",
  bus: "버스",
  car: "차량"
};

const poiPhotos = {
  novaLevante: {
    src: "assets/poi/day2-nova-levante.png",
    alt: "노바레반테 마을과 케이블카 출발 지점"
  },
  malgaFrommer: {
    src: "assets/poi/day2-malga-frommer.png",
    alt: "말가 프롬머 케이블카 환승 지점"
  },
  koelnerHuette: {
    src: "assets/poi/day2-koelner-huette.png",
    alt: "로젠가르텐 암벽 아래의 쾰너 산장"
  },
  paolinaHuette: {
    src: "assets/poi/day2-paolina.png",
    alt: "파올리나 산장과 리프트 승강장"
  },
  alba: {
    src: "assets/poi/day3-alba.png",
    alt: "알바 케이블카 출발 지점"
  },
  colDeiRossi: {
    src: "assets/poi/day3-col-dei-rossi.png",
    alt: "콜 데이 로시 케이블카 상부 지점"
  },
  fredarola: {
    src: "assets/poi/day3-rifugio-fredarola.png",
    alt: "리푸지오 프레다롤라 산장"
  },
  vielDalPan: {
    src: "assets/poi/day3-rifugio-viel-dal-pan.png",
    alt: "마르몰라다를 마주 보는 비엘 달 판 산장"
  },
  passoPordoi: {
    src: "assets/poi/day3-passo-pordoi.png",
    alt: "포르도이 고개의 사쓰 포르도이 케이블카 하부역"
  },
  ortisei: {
    src: "assets/poi/day4-ortisei.png",
    alt: "오르티세이 마을과 케이블카 출발 지점"
  },
  seceda: {
    src: "assets/poi/day4-seceda.png",
    alt: "세체다 케이블카 상부 지역"
  },
  secedaCross: {
    src: "assets/poi/day4-seceda-cross.png",
    alt: "세체다 크로스 능선 전망 포인트"
  },
  baitaTroier: {
    src: "assets/poi/day4-baita-troier.png",
    alt: "바이타 트로이어 산장"
  },
  malgaPieralongia: {
    src: "assets/poi/day4-malga-pieralongia.png",
    alt: "말가 피에라론지아 산장"
  },
  alpeCableLower: {
    src: "assets/poi/day5-a-cable-lower.png",
    alt: "오르티세이 알페 디 시우시 케이블카 승차 지점"
  },
  montSeucUpper: {
    src: "assets/poi/day5-b-cable-upper.png",
    alt: "몬트 세우크 케이블카 상부역"
  },
  wiednerEggJunction: {
    src: "assets/poi/day5-e-junction.png",
    alt: "비트너 에크 버스 표지판이 있는 갈림길"
  },
  florian: {
    src: "assets/poi/day5-f-florian.png",
    alt: "플로리안 곤돌라 하부역"
  },
  wildOWilliams: {
    src: "assets/poi/day5-wild-o-williams.png",
    alt: "와일드 오 윌리엄스 산장"
  },
  saltriaBus: {
    src: "assets/poi/day5-h-bus-11.png",
    alt: "살트리아에서 탑승하는 11번 버스"
  },
  ritschStop: {
    src: "assets/poi/day5-s-ritsch-stop.png",
    alt: "리치 버스 정류소"
  },
  sanonJunction: {
    src: "assets/poi/day5-t-junction.png",
    alt: "호텔 사논 방향으로 우회전하는 갈림길"
  },
  sonneLift: {
    src: "assets/poi/day5-sporthotel-sonne-lift.png",
    alt: "스포트호텔 존네 옆 리프트"
  }
};

const recommendedMenus = {
  baitaTroier: [
    { name: "슈니첼", photo: "assets/food/day4-troier-schnitzel.jpg" },
    { name: "굴라쉬", photo: "assets/food/day4-troier-goulash.jpg" },
    { name: "알리오 올리오", photo: "assets/food/day4-troier-aglio-olio.jpg" }
  ]
};

const routeData = [
  {
    id: "rosengarten",
    day: "2일차",
    title: "로젠가르텐 & 카레짜",
    backgroundImage: "assets/01-rosengarten-map.jpg",
    summary: "숙소에서 버스로 노바레반테까지 이동해 케이블카를 타고 Malga Frommer에서 곤돌라로 환승한 뒤 쾰너 산장에 올라 중식, 이후 파올리나 산장까지 트레킹하고 리프트·버스로 카레짜 호수 산책 후 숙소로 복귀합니다.",
    center: [46.4277, 11.6077],
    zoom: 13,
    weather: { name: "쾰너 산장", coords: [46.44233, 11.612015] },
    poiImage: null,
    trackFile: "assets/tracks/day-01-rosengarten.gpx",
    trackSource: "Outdooractive · Geotrail 9 to Karersee/Carezza via Kuregg/Monte Coronelle",
    pois: [
      ["Nova Levante", "출발 지점", [46.432267, 11.54574], poiPhotos.novaLevante],
      ["Malga Frommer", "케이블카 하차 · 곤돌라 환승", [46.4433, 11.5894], poiPhotos.malgaFrommer],
      ["Kölner Hütte", "곤돌라 상부 · 중식", [46.44233, 11.612015], poiPhotos.koelnerHuette],
      ["Paolina", "트레킹 도착 산장", [46.415716, 11.614615], poiPhotos.paolinaHuette],
      ["Carezza", "리프트 하부/버스 연결", [46.407956, 11.591893]],
      ["Carezza/Karersee", "호수 산책", [46.40934, 11.57515]]
    ],
    steps: [
      {
        range: "출발 · 버스",
        title: "숙소 → Nova Levante",
        mode: "car",
        meta: "버스 이동 · 일정 시작",
        note: "숙소에서 단체 버스를 타고 Nova Levante 케이블카 탑승장까지 이동합니다. 이 차량 이동 구간은 트레킹 지도에 표시되지 않습니다.",
        mapHidden: true,
        coords: [[46.4309, 11.6934], [46.432267, 11.54574]]
      },
      {
        range: "1→2",
        title: "Nova Levante → Malga Frommer",
        mode: "cable",
        meta: "케이블카 이동 · 환승 지점",
        note: "노바레반테에서 케이블카를 타고 Malga Frommer까지 올라갑니다. 여기서 상부 곤돌라로 갈아탑니다.",
        coords: [[46.432267, 11.54574], [46.444191, 11.588833], [46.4433, 11.5894]]
      },
      {
        range: "2→3",
        title: "Malga Frommer → Kölner Hütte",
        mode: "cable",
        meta: "곤돌라 이동 · 쾰너 산장 중식",
        note: "Malga Frommer에서 곤돌라로 환승해 쾰너 산장까지 올라갑니다. 중식은 표시상 3번인 쾰너 산장에서 합니다.",
        coords: [[46.4433, 11.5894], [46.444191, 11.588833], [46.44233, 11.612015]]
      },
      {
        range: "3→4",
        title: "Kölner Hütte → Paolina",
        mode: "trail",
        meta: "트레킹 · 실제 GPX 주요 구간",
        note: "쾰너 산장에서 점심을 먹은 뒤 로젠가르텐 산군을 따라 파올리나 산장까지 걷는 핵심 트레킹 구간입니다.",
        coords: [[46.44233, 11.612015], [46.440693, 11.612508], [46.437816, 11.612766], [46.435521, 11.612042], [46.431701, 11.612287], [46.427693, 11.611694], [46.424607, 11.613866], [46.421512, 11.614476], [46.419603, 11.616147], [46.416863, 11.615861], [46.415716, 11.614615]]
      },
      {
        range: "4→5",
        title: "Paolina → Carezza",
        mode: "lift",
        meta: "리프트 이동 · 하산",
        note: "파올리나 산장에서 리프트를 타고 카레짜 쪽으로 내려옵니다.",
        coords: [[46.415716, 11.614615], [46.407956, 11.591893]]
      },
      {
        range: "5→6",
        title: "Carezza → Carezza/Karersee",
        mode: "car",
        meta: "버스 이동 · 상세 경로 생략",
        note: "리프트 하부에서 버스로 카레짜 호수까지 이동한 뒤 호수 주변을 산책합니다. 지도에는 실제 도로 경로가 아닌 이동 연결선만 표시합니다.",
        approximateConnector: true,
        coords: [[46.407956, 11.591893], [46.408032, 11.591756], [46.407857, 11.591228], [46.40934, 11.57515]]
      },
      {
        range: "복귀 · 버스",
        title: "Carezza/Karersee → 숙소",
        mode: "car",
        meta: "버스 이동 · 일정 종료",
        note: "카레짜 호수 산책을 마친 뒤 단체 버스를 타고 숙소로 복귀합니다. 이 차량 이동 구간은 트레킹 지도에 표시되지 않습니다.",
        mapHidden: true,
        coords: [[46.40934, 11.57515], [46.4309, 11.6934]]
      }
    ]
  },
  {
    id: "marmolada",
    day: "3일차",
    title: "마르몰라다 & 사쓰 포르도이",
    backgroundImage: "assets/02-marmolada-map.jpg",
    summary: "숙소에서 버스로 Alba까지 이동한 뒤 Col dei Rossi와 Fredarola까지 함께 이동합니다. A팀은 Passo Pordoi로 바로 가고, B팀은 Viel dal Pan을 왕복한 뒤 같은 길에 합류합니다. 전원 Sass Pordoi 전망대를 왕복하고 하부역 앞 주차장에서 단체 버스로 QC Terme와 숙소로 이동합니다.",
    center: [46.4823, 11.8241],
    zoom: 13,
    weather: { name: "Rifugio Viel dal Pan", coords: [46.474215, 11.834069] },
    trackFile: "assets/tracks/day-02-alba-viel-sass-pordoi.gpx",
    trackSource: "Outdooractive · 사용자 제작 · Alba → Fredarola → Viel dal Pan 왕복 → Passo Pordoi → Sass Pordoi",
    trackVariantRanges: {
      a: [[0, 47], [319, 433]],
      b: [[0, 433]]
    },
    variantPoiOrder: {
      a: [0, 1, 2, 3, 5],
      b: [0, 1, 2, 4, 3, 5]
    },
    mapHiddenPoiIndices: [6, 7],
    variants: [
      { id: "a", label: "A팀 가벼운 코스", groups: ["common", "a", "join"] },
      { id: "b", label: "B팀 트레킹 코스", groups: ["common", "b", "join"] }
    ],
    pois: [
      ["Alba", "케이블카 출발", [46.457509, 11.788861], poiPhotos.alba],
      ["Col dei Rossi", "케이블카 상부 하차", [46.474546, 11.802258], poiPhotos.colDeiRossi],
      ["Rifugio Fredarola", "A/B팀 공통 산장", [46.477591, 11.814813], poiPhotos.fredarola],
      ["Passo Pordoi", "A팀/B팀 합류 · 케이블카 하부역 · 버스 주차장", [46.488272, 11.810704], poiPhotos.passoPordoi],
      ["Rifugio Viel dal Pan", "B팀 왕복 지점", [46.474215, 11.834069], poiPhotos.vielDalPan],
      ["Sass Pordoi", "전망대 · 자유시간", [46.500312, 11.807728]],
      ["QC Terme Dolomiti", "온천", [46.4276, 11.6865]],
      ["숙소", "온천 후 복귀", [46.4309, 11.6934]]
    ],
    steps: [
      {
        range: "출발 · 버스",
        group: "common",
        title: "숙소 → Alba",
        mode: "car",
        meta: "공통 · 버스 이동 · 일정 시작",
        note: "숙소에서 단체 버스를 타고 Alba 케이블카 탑승장까지 이동합니다. 이 차량 이동 구간은 트레킹 지도에 표시되지 않습니다.",
        mapHidden: true,
        coords: [[46.4309, 11.6934], [46.457509, 11.788861]]
      },
      {
        range: "공통 1→2",
        group: "common",
        title: "Alba → Col dei Rossi",
        mode: "cable",
        meta: "공통 · 케이블카 이동",
        note: "전원이 Alba에서 케이블카를 타고 Col dei Rossi 상부 접근점까지 올라갑니다.",
        coords: [[46.457509, 11.788861], [46.474546, 11.802258]]
      },
      {
        range: "공통 2→3",
        group: "common",
        title: "Col dei Rossi → Fredarola",
        mode: "trail",
        meta: "공통 · 짧은 트레킹",
        note: "전원이 Col dei Rossi에서 Rifugio Fredarola까지 함께 이동합니다. 이 지점에서 A팀과 B팀으로 나뉩니다.",
        coords: [[46.474546, 11.802258], [46.476422, 11.808276], [46.477591, 11.814813]]
      },
      {
        range: "A 3→4",
        group: "a",
        title: "Fredarola → Passo Pordoi",
        mode: "trail",
        meta: "A팀 · 가벼운 코스",
        note: "A팀은 Fredarola에서 Viel dal Pan 방향으로 가지 않고 마을 쪽으로 꺾어 Passo Pordoi의 Funivia Sass Pordoi 하부역으로 이동합니다.",
        coords: [[46.477591, 11.814813], [46.479351, 11.813837], [46.480648, 11.812103], [46.483132, 11.813577], [46.485744, 11.814131], [46.486932, 11.81294], [46.488272, 11.810704]]
      },
      {
        range: "B 3→4",
        group: "b",
        title: "Fredarola → Rifugio Viel dal Pan",
        mode: "trail",
        meta: "B팀 · 트레킹 코스",
        note: "B팀은 Fredarola에서 Rifugio Viel dal Pan까지 능선 전망 트레킹을 진행합니다.",
        coords: [[46.477591, 11.814813], [46.476063, 11.818545], [46.474932, 11.820944], [46.473155, 11.824769], [46.474253, 11.827995], [46.474215, 11.834069]]
      },
      {
        range: "B 4→3",
        group: "b",
        title: "Viel dal Pan → Fredarola",
        mode: "trail",
        meta: "B팀 · 같은 길 복귀",
        note: "B팀은 Rifugio Viel dal Pan에서 같은 길로 Fredarola까지 되돌아옵니다.",
        coords: [[46.474215, 11.834069], [46.474253, 11.827995], [46.473155, 11.824769], [46.474932, 11.820944], [46.476063, 11.818545], [46.477591, 11.814813]]
      },
      {
        range: "B 3→5",
        group: "b",
        title: "Fredarola → Passo Pordoi",
        mode: "trail",
        meta: "B팀 · 합류 지점 이동",
        note: "B팀은 Viel dal Pan 왕복 후 Fredarola로 돌아와 A팀과 같은 길로 Passo Pordoi 하부역까지 이동합니다.",
        coords: [[46.477591, 11.814813], [46.479351, 11.813837], [46.480648, 11.812103], [46.483132, 11.813577], [46.485744, 11.814131], [46.486932, 11.81294], [46.488272, 11.810704]]
      },
      {
        variantRange: { a: "A 4→5", b: "B 5→6" },
        group: "join",
        title: "Passo Pordoi → Sass Pordoi",
        mode: "cable",
        meta: "전원 · 전망대 이동",
        note: "Passo Pordoi에서 전원이 케이블카를 타고 Sass Pordoi 전망대로 올라갑니다. 전망대에서 자유시간과 관광을 진행합니다.",
        coords: [[46.488272, 11.810704], [46.500312, 11.807728]]
      },
      {
        variantRange: { a: "A 5→4", b: "B 6→5" },
        group: "join",
        title: "Sass Pordoi → Passo Pordoi",
        mode: "cable",
        meta: "전원 · 케이블카 복귀",
        note: "전망대 자유시간 후 케이블카를 타고 Passo Pordoi 하부역으로 복귀하고, 바로 앞 주차장에서 단체 버스에 탑승합니다.",
        coords: [[46.500312, 11.807728], [46.488272, 11.810704]]
      },
      {
        range: "이후 · 버스",
        group: "join",
        title: "Passo Pordoi → QC Terme Dolomiti",
        mode: "car",
        meta: "전원 · 버스 이동",
        note: "케이블카 하부역 앞 주차장에서 단체 버스를 타고 QC Terme Dolomiti까지 이동해 온천 시간을 가집니다. 이 차량 이동 구간은 트레킹 지도에 표시되지 않습니다.",
        mapHidden: true,
        coords: [[46.488272, 11.810704], [46.4638, 11.7687], [46.4386, 11.7182], [46.4276, 11.6865]]
      },
      {
        range: "마무리 · 버스",
        group: "join",
        title: "QC Terme Dolomiti → 숙소",
        mode: "car",
        meta: "전원 · 온천 후 복귀",
        note: "온천을 마친 뒤 단체 버스로 숙소에 복귀합니다. 이 차량 이동 구간은 트레킹 지도에 표시되지 않습니다.",
        mapHidden: true,
        coords: [[46.4276, 11.6865], [46.4309, 11.6934]]
      }
    ]
  },
  {
    id: "seceda",
    day: "4일차",
    title: "오르티세이 & 세체다",
    backgroundImage: "assets/03-seceda-map.jpg",
    summary: "숙소에서 오르티세이로 이동해 케이블카로 세체다에 오른 뒤 Seceda Cross, Baita Troier, Pieralongia를 함께 둘러봅니다. Troier로 돌아온 뒤 쉬운 코스는 능선길로 바로 복귀하고, 도전 코스는 Baita Daniel, Mastle, Baita Sofie를 거쳐 상부역으로 돌아옵니다.",
    center: [46.5975, 11.7355],
    zoom: 14,
    weather: { name: "Seceda Cross", coords: [46.60064, 11.725747] },
    poiImage: null,
    trackFiles: {
      easy: "assets/tracks/day-03-seceda-easy.gpx",
      challenge: "assets/tracks/day-03-seceda-challenge.gpx"
    },
    trackSource: "Outdooractive · 사용자 공유 GPX · Ortisei → Seceda → Pieralongia 왕복",
    variantTrailKm: { easy: 5.3, challenge: 5.6 },
    variants: [
      { id: "easy", label: "쉬운 복귀 코스", groups: ["common", "easy", "finish"] },
      { id: "challenge", label: "도전 복귀 코스", groups: ["common", "challenge", "finish"] }
    ],
    variantPoiOrder: {
      easy: [0, 1, 2, 3, 4, 8],
      challenge: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    pois: [
      ["Ortisei", "케이블카 하부역", [46.576378, 11.675055], poiPhotos.ortisei],
      ["Seceda 상부역", "케이블카 하차 · 복귀 지점", [46.597863, 11.724404], poiPhotos.seceda],
      ["Seceda Cross", "능선 전망 포인트", [46.60064, 11.725747], poiPhotos.secedaCross],
      ["Baita Troier", "점심 식사 · 공통 반환점", [46.597963, 11.739402], poiPhotos.baitaTroier, recommendedMenus.baitaTroier],
      ["Malga Pieralongia", "산장 · 오들 산군 전망", [46.597357, 11.747765], poiPhotos.malgaPieralongia],
      ["Baita Daniel", "도전 코스 산장", [46.595154, 11.733403]],
      ["Baita Mastle", "도전 코스 산장", [46.594792, 11.730089]],
      ["Baita Sofie", "도전 코스 마지막 산장", [46.597556, 11.727201]],
      ["쉬운 코스 갈림길", "직진해 상부역으로 복귀", [46.599862, 11.734731]]
    ],
    steps: [
      {
        range: "출발 · 버스",
        group: "common",
        title: "숙소 → Ortisei",
        mode: "car",
        meta: "공통 · 버스 이동 · 일정 시작",
        note: "숙소에서 단체 버스로 오르티세이 케이블카 하부역까지 이동합니다. 차량 경로는 트레킹 지도에 표시하지 않습니다.",
        mapHidden: true,
        coords: [[46.4309, 11.6934], [46.576378, 11.675055]]
      },
      {
        range: "공통 1→2",
        group: "common",
        title: "Ortisei → Seceda 상부역",
        mode: "cable",
        meta: "공통 · 케이블카 이동",
        note: "오르티세이에서 케이블카를 타고 세체다 상부역까지 올라갑니다.",
        coords: [[46.576378, 11.675055], [46.589836, 11.702242], [46.597863, 11.724404]]
      },
      {
        range: "공통 2→3",
        group: "common",
        title: "Seceda 상부역 → Seceda Cross",
        mode: "trail",
        meta: "공통 · 능선 전망 구간",
        note: "상부역에서 세체다 능선의 대표 전망 포인트인 Seceda Cross까지 이동합니다.",
        coords: [[46.597863, 11.724404], [46.60064, 11.725747]]
      },
      {
        range: "공통 3→4",
        group: "common",
        title: "Seceda Cross → Baita Troier",
        mode: "trail",
        meta: "공통 · 점심 식사",
        note: "능선 풍경을 보며 Baita Troier까지 내려가 보통 이곳에서 점심을 먹습니다.",
        coords: [[46.60064, 11.725747], [46.597963, 11.739402]]
      },
      {
        range: "공통 4→5",
        group: "common",
        title: "Baita Troier → Malga Pieralongia",
        mode: "trail",
        meta: "공통 · 산장과 전망 포인트",
        note: "점심 후 Pieralongia 산장으로 이동해 주변 풍경과 오들 산군을 둘러봅니다.",
        coords: [[46.597963, 11.739402], [46.597357, 11.747765]]
      },
      {
        range: "공통 5→4",
        group: "common",
        title: "Malga Pieralongia → Baita Troier",
        mode: "trail",
        meta: "공통 · 같은 길 복귀",
        note: "Pieralongia에서 왔던 길을 따라 Baita Troier까지 되돌아온 뒤 복귀 코스를 선택합니다.",
        coords: [[46.597357, 11.747765], [46.597939, 11.739536]]
      },
      {
        range: "도전 4→6",
        group: "challenge",
        title: "Baita Troier → Baita Daniel",
        mode: "trail",
        meta: "도전 코스 · 오르막 시작",
        note: "조금 더 힘든 길을 선택한 팀은 Troier에서 Baita Daniel 방향으로 이동합니다.",
        coords: [[46.597939, 11.739536], [46.595154, 11.733403]]
      },
      {
        range: "도전 6→7",
        group: "challenge",
        title: "Baita Daniel → Baita Mastle",
        mode: "trail",
        meta: "도전 코스 · 산장 연결",
        note: "Baita Daniel을 지나 Baita Mastle까지 오르막을 이어갑니다.",
        coords: [[46.595154, 11.733403], [46.594792, 11.730089]]
      },
      {
        range: "도전 7→8",
        group: "challenge",
        title: "Baita Mastle → Baita Sofie",
        mode: "trail",
        meta: "도전 코스 · 마지막 산장",
        note: "Mastle에서 Baita Sofie까지 올라 마지막으로 쉬어간 뒤 상부역으로 향합니다.",
        coords: [[46.594792, 11.730089], [46.597556, 11.727201]]
      },
      {
        range: "도전 8→2",
        group: "challenge",
        title: "Baita Sofie → Seceda 상부역",
        mode: "trail",
        meta: "도전 코스 · 케이블카 복귀",
        note: "Baita Sofie에서 마지막 오르막을 지나 케이블카 상부역으로 돌아옵니다.",
        coords: [[46.597556, 11.727201], [46.597883, 11.724388]]
      },
      {
        range: "쉬운 4→6",
        group: "easy",
        title: "Baita Troier → 직진 갈림길",
        mode: "trail",
        meta: "쉬운 코스 · 완만한 복귀",
        note: "Troier에서 산장 순환길로 내려가지 않고 상부역 방향의 완만한 길을 따라 직진합니다.",
        coords: [[46.597939, 11.739536], [46.599862, 11.734731]]
      },
      {
        range: "쉬운 6→2",
        group: "easy",
        title: "직진 갈림길 → Seceda 상부역",
        mode: "trail",
        meta: "쉬운 코스 · 상부역 복귀",
        note: "능선 아래쪽 길을 이어 걸어 케이블카 상부역으로 바로 돌아옵니다.",
        coords: [[46.599862, 11.734731], [46.597876, 11.724394]]
      },
      {
        range: "하산 · 케이블카",
        group: "finish",
        title: "Seceda 상부역 → Ortisei",
        mode: "cable",
        meta: "공통 · 케이블카 하산",
        note: "상부역에서 케이블카를 타고 오르티세이로 내려옵니다.",
        approximateConnector: true,
        coords: [[46.597863, 11.724404], [46.589836, 11.702242], [46.576378, 11.675055]]
      },
      {
        range: "마무리 · 버스",
        group: "finish",
        title: "Ortisei → 숙소",
        mode: "car",
        meta: "공통 · 버스 이동 · 일정 종료",
        note: "오르티세이에서 단체 버스를 타고 숙소로 복귀합니다. 차량 경로는 트레킹 지도에 표시하지 않습니다.",
        mapHidden: true,
        coords: [[46.576378, 11.675055], [46.4309, 11.6934]]
      }
    ]
  },
  {
    id: "alpe-siusi",
    day: "5일차",
    title: "알페 디 시우시",
    backgroundImage: "assets/04-alpe-siusi-map.jpg",
    summary: "숙소에서 오르티세이로 이동해 Mont Sëuc 케이블카로 고원에 오른 뒤 Florian까지 걷고 Wild O’Williams 산장을 왕복합니다. 쉬운 코스는 11번 버스와 Sanon 길을 이용하고, 도전 코스는 Saltria와 Brunelle 사이 고원길을 계속 걸어 Sporthotel Sonne에서 합류합니다.",
    center: [46.5438, 11.6606],
    zoom: 13,
    weather: { name: "Alpe di Siusi", coords: [46.545905, 11.6477] },
    poiImage: null,
    trackFiles: {
      easy: "assets/tracks/day-04-alpe-siusi.gpx",
      challenge: "assets/tracks/day-04-alpe-siusi-hard.gpx"
    },
    trackSource: "Outdooractive · 사용자 공유 GPX · Mont Sëuc → Florian → Saltria → Ritsch → Sporthotel Sonne",
    variantTrailKm: { easy: 8.6, challenge: 8.9 },
    variants: [
      { id: "easy", label: "쉬운 코스", groups: ["common", "easy", "finish"] },
      { id: "challenge", label: "도전 코스", groups: ["common", "challenge", "finish"] }
    ],
    variantPoiOrder: {
      easy: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      challenge: [0, 1, 2, 3, 4, 11, 9, 10]
    },
    pois: [
      ["Ortisei 케이블카 하부역", "A · 버스 주차장 앞 승차 지점", [46.573101, 11.671181], poiPhotos.alpeCableLower],
      ["Mont Sëuc 상부역", "B/K/X · 케이블카 하차 및 최종 복귀", [46.558049, 11.664709], poiPhotos.montSeucUpper],
      ["Wiedner Egg 갈림길", "E · Florian 방향으로 진행", [46.537848, 11.653879], poiPhotos.wiednerEggJunction],
      ["Florian", "F · 곤돌라 하부역", [46.53132, 11.671119], poiPhotos.florian],
      ["Wild O’Williams", "G · 전망 감상 및 추천 음식", [46.515406, 11.684711], poiPhotos.wildOWilliams],
      ["Saltria 버스 정류장", "H · 현장 발권 후 11번 버스 탑승", [46.531719, 11.669259], poiPhotos.saltriaBus],
      ["Ritsch 정류소", "S · 11번 버스 하차", [46.540491, 11.645572], poiPhotos.ritschStop],
      ["Sanon 방향 갈림길", "T · 오른쪽 길로 진입", [46.542899, 11.646677], poiPhotos.sanonJunction],
      ["Hotel Sanon", "U · 호텔을 지나 계속 이동", [46.547865, 11.655507]],
      ["Sporthotel Sonne", "I/V · 호텔 옆 리프트 탑승", [46.553718, 11.663376], poiPhotos.sonneLift],
      ["Sonne 리프트 상부", "J/W · 하차 후 Mont Sëuc 방향 도보", [46.557738, 11.663636]],
      ["Saltria 도보 분기", "H · Brunelle 호텔 사이길로 진행", [46.531893, 11.66898]]
    ],
    steps: [
      {
        range: "출발 · 버스",
        group: "common",
        title: "숙소 → Ortisei",
        mode: "bus",
        meta: "버스 이동 · 일정 시작",
        note: "숙소에서 단체 버스를 타고 오르티세이 버스 주차장으로 이동합니다. 케이블카 승차장은 주차장 바로 앞에 있습니다.",
        mapHidden: true,
        coords: [[46.4309, 11.6934], [46.573101, 11.671181]]
      },
      {
        range: "1→2",
        group: "common",
        title: "Ortisei → Mont Sëuc 상부역",
        mode: "cable",
        meta: "케이블카 · 고원 접근",
        note: "주차장 앞 A 지점에서 케이블카를 타고 B 지점인 Mont Sëuc 상부역에서 내립니다.",
        coords: [[46.573101, 11.671181], [46.558049, 11.664709]]
      },
      {
        range: "2→3",
        group: "common",
        title: "Mont Sëuc → 고원 전망길",
        mode: "trail",
        meta: "트레킹 · 초원길 시작",
        note: "케이블카 상부역에서 알페 디 시우시 고원 안쪽의 C 지점으로 걷기 시작합니다.",
        coords: [[46.558049, 11.664709], [46.557992, 11.659039]]
      },
      {
        range: "2→3",
        group: "common",
        title: "고원 전망길 → Piz 구간",
        mode: "trail",
        meta: "트레킹 · 고원 횡단",
        note: "초원과 산군 전망을 보며 C에서 D 지점까지 고원길을 이어갑니다.",
        coords: [[46.557992, 11.659039], [46.545905, 11.6477]]
      },
      {
        range: "2→3",
        group: "common",
        title: "Piz 구간 → Wiedner Egg 갈림길",
        mode: "trail",
        meta: "트레킹 · 주의 갈림길",
        note: "D 지점을 지나 E의 Wiedner Egg 버스 표지판이 보이는 갈림길에 도착합니다. 준비된 사진의 화살표 방향으로 진행합니다.",
        coords: [[46.545905, 11.6477], [46.537848, 11.653879]]
      },
      {
        range: "3→4",
        group: "common",
        title: "Wiedner Egg 갈림길 → Florian",
        mode: "trail",
        meta: "트레킹 · 곤돌라 하부역",
        note: "갈림길을 지나 F 지점인 Florian 곤돌라 하부역까지 계속 걷습니다.",
        coords: [[46.537848, 11.653879], [46.53132, 11.671119]]
      },
      {
        range: "4→5",
        group: "common",
        title: "Florian → Wild O’Williams",
        mode: "lift",
        meta: "곤돌라 · 전망 산장 이동",
        note: "Florian에서 곤돌라를 타고 올라 Wild O’Williams 산장에서 전망을 보고 추천 음식을 먹습니다.",
        coords: [[46.53132, 11.671119], [46.515406, 11.684711]]
      },
      {
        range: "5→4",
        group: "common",
        title: "Wild O’Williams → Florian",
        mode: "lift",
        meta: "곤돌라 · 같은 길 하산",
        note: "산장 방문을 마친 뒤 Florian 곤돌라를 타고 F 지점으로 다시 내려옵니다.",
        coords: [[46.515406, 11.684711], [46.531338, 11.671229]]
      },
      {
        range: "4→6",
        group: "easy",
        title: "Florian → Saltria 버스 정류장",
        mode: "trail",
        meta: "짧은 도보 · 버스 환승",
        note: "아까 지나왔던 길로 짧게 이동해 H 지점인 Saltria 버스 정류장으로 갑니다.",
        coords: [[46.531338, 11.671229], [46.531719, 11.669259]]
      },
      {
        range: "6→7",
        group: "easy",
        title: "Saltria → Ritsch 정류소",
        mode: "bus",
        meta: "11번 버스 · 현장 발권",
        note: "정류장에서 티켓을 구입해 11번 버스를 탑니다. I부터 R까지의 경유 지점을 지나 S 지점인 Ritsch 정류소에서 내립니다.",
        coords: [[46.531719, 11.669259], [46.540491, 11.645572]]
      },
      {
        range: "7→8",
        group: "easy",
        title: "Ritsch 정류소 → Sanon 방향 갈림길",
        mode: "trail",
        meta: "트레킹 · 되돌아 걷기",
        note: "버스가 지나온 길을 조금 되돌아 걸어 T 지점 갈림길까지 이동합니다.",
        coords: [[46.540491, 11.645572], [46.542899, 11.646677]]
      },
      {
        range: "8→9",
        group: "easy",
        title: "Sanon 방향 갈림길 → Hotel Sanon",
        mode: "trail",
        meta: "트레킹 · 우회전 주의",
        note: "T 갈림길에서 준비된 사진처럼 오른쪽 길로 들어가 U 지점인 Hotel Sanon까지 걷습니다.",
        coords: [[46.542899, 11.646677], [46.547865, 11.655507]]
      },
      {
        range: "9→10",
        group: "easy",
        title: "Hotel Sanon → Sporthotel Sonne",
        mode: "trail",
        meta: "트레킹 · 리프트 탑승장 이동",
        note: "Hotel Sanon을 지나 V 지점인 Sporthotel Sonne와 바로 옆 리프트 탑승장까지 이동합니다.",
        coords: [[46.547865, 11.655507], [46.553718, 11.663376]]
      },
      {
        range: "10→11",
        group: "easy",
        title: "Sporthotel Sonne → Sonne 리프트 상부",
        mode: "lift",
        meta: "리프트 · 고도 상승",
        note: "Sporthotel Sonne 옆 리프트를 타고 W 지점까지 올라갑니다.",
        coords: [[46.553718, 11.663376], [46.557738, 11.663636]]
      },
      {
        range: "11→2",
        group: "easy",
        title: "Sonne 리프트 상부 → Mont Sëuc 상부역",
        mode: "trail",
        meta: "트레킹 · 케이블카 복귀",
        note: "리프트에서 내린 뒤 아침에 케이블카에서 내렸던 X/B 지점까지 걸어갑니다.",
        coords: [[46.557738, 11.663636], [46.557872, 11.664596]]
      },
      {
        range: "4→6",
        group: "challenge",
        title: "Florian → Saltria 도보 분기",
        mode: "trail",
        meta: "도전 코스 · 도보 복귀 시작",
        note: "Florian으로 내려온 뒤 버스를 타지 않고 H 지점에서 Saltria와 Brunelle 호텔 사이길로 들어갑니다.",
        coords: [[46.531338, 11.671229], [46.531893, 11.66898]]
      },
      {
        range: "6→7",
        group: "challenge",
        title: "Saltria 도보 분기 → Sporthotel Sonne",
        mode: "trail",
        meta: "도전 코스 · 고원길 연속 트레킹",
        note: "11번 버스 대신 Saltria와 Brunelle 호텔 사이 고원길을 계속 걸어 I 지점인 Sporthotel Sonne까지 이동합니다.",
        coords: [[46.531893, 11.66898], [46.55364, 11.663283]]
      },
      {
        range: "7→8",
        group: "challenge",
        title: "Sporthotel Sonne → Sonne 리프트 상부",
        mode: "lift",
        meta: "도전 코스 · 리프트 이동",
        note: "Sporthotel Sonne 옆 리프트를 타고 J 지점까지 올라갑니다.",
        coords: [[46.55364, 11.663283], [46.557813, 11.663578]]
      },
      {
        range: "8→2",
        group: "challenge",
        title: "Sonne 리프트 상부 → Mont Sëuc 상부역",
        mode: "trail",
        meta: "도전 코스 · 케이블카 복귀",
        note: "리프트에서 내린 뒤 K 지점인 Mont Sëuc 케이블카 상부역까지 걸어갑니다.",
        coords: [[46.557813, 11.663578], [46.557838, 11.66451]]
      },
      {
        range: "2→1",
        group: "finish",
        title: "Mont Sëuc 상부역 → Ortisei",
        mode: "cable",
        meta: "케이블카 · 오르티세이 하산",
        note: "Mont Sëuc 상부역에서 케이블카를 타고 오르티세이로 내려옵니다.",
        approximateConnector: true,
        coords: [[46.557872, 11.664596], [46.558049, 11.664709], [46.573101, 11.671181]]
      },
      {
        range: "마무리 · 버스",
        group: "finish",
        title: "Ortisei → 숙소",
        mode: "bus",
        meta: "버스 이동 · 일정 종료",
        note: "오르티세이 버스 주차장에서 단체 버스를 타고 숙소로 복귀합니다.",
        mapHidden: true,
        coords: [[46.573101, 11.671181], [46.4309, 11.6934]]
      }
    ]
  },
  {
    id: "cinque-torri",
    day: "6일차",
    title: "친퀘토리",
    backgroundImage: "assets/05-cinque-torri-map.jpg",
    summary: "Passo Gardena, Valparola, Falzarego를 차량으로 지나 Bai de Dones에서 리프트를 타고 Scoiattoli, Cinque Torri, Averau, Nuvolau를 연결합니다.",
    center: [46.5065, 12.0437],
    zoom: 12,
    weather: { name: "Rifugio Scoiattoli", coords: [46.508, 12.0489] },
    trackFile: "assets/tracks/day-05-scoiattoli-averau.gpx",
    trackSource: "5 Torri · Scoiattoli → Averau",
    pois: [
      ["Passo Gardena", "차량 경유", [46.549, 11.808]],
      ["Passo Valparola", "차량 경유", [46.5328, 11.9902]],
      ["Passo Falzarego", "차량 경유", [46.5183, 12.0094]],
      ["Cianzope", "차량 접근 중간 지점", [46.5219, 12.0291]],
      ["Bai de Dones", "리프트 하부", [46.5182, 12.0382]],
      ["Rifugio Scoiattoli", "리프트 상부", [46.508, 12.0489]],
      ["Cinque Torri", "암봉 루프", [46.5071, 12.0572]],
      ["Rifugio 5 Torri", "산장", [46.5036, 12.0542]],
      ["Rifugio Averau", "Forcella Nuvolau", [46.5008, 12.0478]],
      ["Rifugio Nuvolau", "전망 산장", [46.4934, 12.0506]],
      ["Cortina d'Ampezzo", "이후 방문", [46.5405, 12.1357]],
      ["Lago di Braies", "호수 산책", [46.6943, 12.0859]]
    ],
    steps: [
      {
        title: "Passo Gardena → Passo Valparola",
        mode: "car",
        meta: "차량 이동 · 패스 경유",
        note: "호텔에서 출발해 가르데나 패스에서 발파롤라 패스 방향으로 넘어갑니다.",
        coords: [[46.549, 11.808], [46.5328, 11.9902]]
      },
      {
        title: "Passo Valparola → Passo Falzarego",
        mode: "car",
        meta: "차량 이동 · 패스 경유",
        note: "친퀘토리 접근 전 Falzarego 패스로 이어지는 차량 이동입니다.",
        coords: [[46.5328, 11.9902], [46.5183, 12.0094]]
      },
      {
        title: "Passo Falzarego → Bai de Dones",
        mode: "car",
        meta: "차량 이동 · 리프트 하부",
        note: "Cianzope 부근을 지나 5 Torri 리프트 하부로 접근합니다.",
        coords: [[46.5183, 12.0094], [46.5219, 12.0291], [46.5182, 12.0382]]
      },
      {
        title: "Bai de Dones → Scoiattoli",
        mode: "lift",
        meta: "리프트 · 친퀘토리 접근",
        note: "5 Torri 리프트를 타고 Scoiattoli 산장까지 올라갑니다.",
        coords: [[46.5182, 12.0382], [46.508, 12.0489]]
      },
      {
        title: "Scoiattoli → Cinque Torri",
        mode: "trail",
        meta: "트레킹 · 암봉 접근",
        note: "Scoiattoli 산장에서 친퀘토리 암봉 쪽으로 이동합니다.",
        coords: [[46.508, 12.0489], [46.5112, 12.0551], [46.5071, 12.0572]]
      },
      {
        title: "Cinque Torri → Rifugio 5 Torri",
        mode: "trail",
        meta: "트레킹 · 루프 하단",
        note: "암봉 주변을 돌아 5 Torri 산장 방향으로 내려갑니다.",
        coords: [[46.5071, 12.0572], [46.5064, 12.0589], [46.5036, 12.0542]]
      },
      {
        title: "Rifugio 5 Torri → Scoiattoli",
        mode: "trail",
        meta: "트레킹 · 루프 완료",
        note: "짧은 친퀘토리 루프를 마치고 Scoiattoli 산장으로 복귀합니다.",
        coords: [[46.5036, 12.0542], [46.5047, 12.0529], [46.508, 12.0489]]
      },
      {
        title: "Scoiattoli → Averau",
        mode: "trail",
        meta: "트레킹 · 산장 연결",
        note: "Scoiattoli에서 Averau 산장으로 오르는 쉬운 연결 구간입니다.",
        coords: [[46.508, 12.0489], [46.5042, 12.0485], [46.5008, 12.0478]]
      },
      {
        title: "Averau → Nuvolau",
        mode: "trail",
        meta: "트레킹 · 전망대",
        note: "Nuvolau 산장까지 올라가는 당일 조망 확장 구간입니다.",
        coords: [[46.5008, 12.0478], [46.4973, 12.0491], [46.4934, 12.0506]]
      },
      {
        title: "Nuvolau → Scoiattoli",
        mode: "trail",
        meta: "트레킹 · 리프트 복귀",
        note: "전망 산장에서 Averau를 거쳐 리프트 상부로 돌아오는 복귀 구간입니다.",
        coords: [[46.4934, 12.0506], [46.5008, 12.0478], [46.508, 12.0489]]
      },
      {
        title: "Bai de Dones → Cortina → Braies",
        mode: "car",
        meta: "차량 이동 · 이후 일정",
        note: "트레킹 후 코르티나 담페초를 지나 브라이에스 호수 산책으로 이어집니다.",
        coords: [[46.5182, 12.0382], [46.5405, 12.1357], [46.6943, 12.0859]]
      }
    ]
  },
  {
    id: "tre-cime",
    day: "7일차",
    title: "트레치메 디 라바레도",
    backgroundImage: "assets/06-tre-cime-map.jpg",
    summary: "Auronzo 산장에서 Lavaredo, Locatelli, 동굴 포토존, Langalm 방향을 지나 101·105 코스로 순환합니다.",
    center: [46.6256, 12.3032],
    zoom: 13,
    weather: { name: "Rifugio Locatelli", coords: [46.636902, 12.31056] },
    poiImage: "assets/tre-cime-poi.jpg",
    trackFile: "assets/tracks/day-06-tre-cime.gpx",
    trackSource: "Trecime Trek · Tre Cime di Lavaredo circuit",
    pois: [
      ["Tre Cime Parking", "주차장/정류장", [46.612057, 12.294137]],
      ["Rifugio Auronzo", "출발/도착", [46.6128, 12.2925]],
      ["Cappella degli Alpini", "예배당", [46.6154, 12.3029]],
      ["Rifugio Lavaredo", "101코스 산장", [46.61854, 12.31183]],
      ["Forcella Lavaredo", "고개", [46.6232, 12.3154]],
      ["Rifugio Locatelli", "점심/조망", [46.636902, 12.31056]],
      ["동굴 포토존", "사진 포인트", [46.629187, 12.311317]],
      ["Laghi dei Piani", "Locatelli 인근 호수", [46.6382, 12.3043]],
      ["Langalm", "105코스 복귀", [46.6234, 12.2821]]
    ],
    steps: [
      {
        title: "주차장 → Auronzo",
        mode: "trail",
        meta: "접근 · 출발점",
        note: "셔틀/차량 도착 후 Auronzo 산장 앞에서 루프를 시작합니다.",
        coords: [[46.612057, 12.294137], [46.6128, 12.2925]]
      },
      {
        title: "Auronzo → 예배당",
        mode: "trail",
        meta: "101코스 · 초반 산책로",
        note: "Auronzo 산장에서 완만한 길을 따라 예배당 방향으로 갑니다.",
        coords: [[46.6128, 12.2925], [46.6154, 12.3029]]
      },
      {
        title: "예배당 → Lavaredo",
        mode: "trail",
        meta: "101코스 · 완만한 시작",
        note: "Auronzo 산장에서 Lavaredo 산장까지 이어지는 초반 구간입니다.",
        coords: [[46.6154, 12.3029], [46.61854, 12.31183]]
      },
      {
        title: "Lavaredo → Forcella Lavaredo",
        mode: "trail",
        meta: "101코스 · 고개",
        note: "트레치메 동쪽 고개로 올라 Locatelli 방향 조망이 열립니다.",
        coords: [[46.61854, 12.31183], [46.6232, 12.3154]]
      },
      {
        title: "Forcella → Locatelli",
        mode: "trail",
        meta: "101코스 · 산장 도착",
        note: "Locatelli 산장까지 가는 대표 전망 구간입니다.",
        coords: [[46.6232, 12.3154], [46.6291, 12.3136], [46.636902, 12.31056]]
      },
      {
        title: "Locatelli → Laghi dei Piani",
        mode: "trail",
        meta: "식사/조망 · 짧은 분기",
        note: "Locatelli 산장 주변의 호수 조망을 확인하는 짧은 분기입니다.",
        coords: [[46.636902, 12.31056], [46.6382, 12.3043]]
      },
      {
        title: "Locatelli → 동굴 포토존",
        mode: "trail",
        meta: "사진 포인트 · 짧은 이동",
        note: "트레치메 암봉을 프레임처럼 담는 사진 포인트를 찍습니다.",
        coords: [[46.6382, 12.3043], [46.636902, 12.31056], [46.629187, 12.311317]]
      },
      {
        title: "동굴 포토존 → Langalm",
        mode: "trail",
        meta: "105코스 · 복귀 시작",
        note: "북서쪽으로 크게 돌아 Langalm 방향으로 내려갑니다.",
        coords: [[46.629187, 12.311317], [46.6324, 12.299], [46.6279, 12.2874], [46.6234, 12.2821]]
      },
      {
        title: "Langalm → Auronzo",
        mode: "trail",
        meta: "105코스 · 루프 완료",
        note: "남쪽 사면을 돌아 Auronzo 산장과 주차장 방향으로 복귀합니다.",
        coords: [[46.6234, 12.2821], [46.6164, 12.2849], [46.6128, 12.2925]]
      }
    ]
  }
];

let activeRouteIndex = 0;
let activeStepIndex = 0;
let activeLayer = "all";
let map;
let tileLayer;
let drawnLayers = [];
let poiMarkers = [];
let importedTracks = {};
let importedTrackLayer = null;
let weatherRequestToken = 0;
let activeVariants = { marmolada: "a" };
let isMapStepSheetOpen = false;
const expandedPoiRoutes = new Set();

const appShell = document.querySelector(".app-shell");
const routeTabs = document.querySelector("#routeTabs");
const mobileRouteTabs = document.querySelector("#mobileRouteTabs");
const routeEyebrow = document.querySelector("#routeEyebrow");
const routeTitle = document.querySelector("#routeTitle");
const currentStepTitle = document.querySelector("#currentStepTitle");
const currentStepMeta = document.querySelector("#currentStepMeta");
const currentStepNote = document.querySelector("#currentStepNote");
const routeSummary = document.querySelector("#routeSummary");
const stepList = document.querySelector("#stepList");
const layerFilters = document.querySelector("#layerFilters");
const poiSection = document.querySelector("#poiSection");
const poiImage = document.querySelector("#poiImage");
const poiList = document.querySelector("#poiList");
const poiToggleButton = document.querySelector("#poiToggleButton");
const photoCredits = document.querySelector("#photoCredits");
const foodPhotoDialog = document.querySelector("#foodPhotoDialog");
const foodPhotoDialogImage = document.querySelector("#foodPhotoDialogImage");
const foodPhotoDialogCaption = document.querySelector("#foodPhotoDialogCaption");
const closeFoodPhotoDialog = document.querySelector("#closeFoodPhotoDialog");
const mapStepSheet = document.querySelector("#mapStepSheet");
const mapCurrentStep = document.querySelector("#mapCurrentStep");
const mapStepDetailMeta = document.querySelector("#mapStepDetailMeta");
const mapStepDetailNote = document.querySelector("#mapStepDetailNote");
const previousStepButton = document.querySelector("#previousStepButton");
const nextStepButton = document.querySelector("#nextStepButton");
const closeMapStepSheet = document.querySelector("#closeMapStepSheet");
const mapStepSheetExpanded = document.querySelector("#mapStepSheetExpanded");
const mapStepList = document.querySelector("#mapStepList");
const weatherPlace = document.querySelector("#weatherPlace");
const weatherBody = document.querySelector("#weatherBody");
const variantPanel = document.querySelector("#variantPanel");
const variantButtons = document.querySelector("#variantButtons");

function initMap() {
  map = L.map("routeMap", {
    zoomControl: false,
    scrollWheelZoom: true
  });
  L.control.zoom({ position: "bottomleft" }).addTo(map);
  tileLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
  }).addTo(map);
}

function buildTabs(container) {
  container.innerHTML = "";
  const isMobileNavigation = container === mobileRouteTabs;
  routeData.forEach((route, index) => {
    const button = document.createElement("button");
    button.className = "tab-button";
    button.type = "button";
    button.textContent = isMobileNavigation ? route.day : `${route.day} · ${route.title}`;
    button.setAttribute("aria-label", `${route.day} ${route.title}`);
    button.addEventListener("click", () => selectRoute(index));
    container.appendChild(button);
  });
}

function buildFilters() {
  layerFilters.innerHTML = "";
  Object.entries(labels).forEach(([key, label]) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.innerHTML = key === "all" ? label : `<i class="filter-dot" style="background:${colors[key]}"></i>${label}`;
    button.addEventListener("click", () => {
      activeLayer = key;
      if (key !== "all") {
        const firstMatchingIndex = getVisibleSteps().findIndex(({ step }) => step.mode === key);
        if (firstMatchingIndex >= 0) activeStepIndex = firstMatchingIndex;
      }
      renderFilters();
      renderMap();
      renderSteps();
      updateCurrentStep();
    });
    layerFilters.appendChild(button);
  });
}

function renderFilters() {
  [...layerFilters.children].forEach((button, index) => {
    const key = Object.keys(labels)[index];
    button.hidden = key !== "all" && !getVisibleSteps().some(({ step }) => step.mode === key);
    button.classList.toggle("active", activeLayer === key);
  });
}

function renderVariants() {
  const route = routeData[activeRouteIndex];
  if (!route.variants?.length) {
    variantPanel.hidden = true;
    variantButtons.innerHTML = "";
    return;
  }

  variantPanel.hidden = false;
  variantButtons.innerHTML = "";
  route.variants.forEach(variant => {
    const button = document.createElement("button");
    button.className = "variant-button";
    button.classList.toggle("active", getActiveVariantId(route) === variant.id);
    button.type = "button";
    button.textContent = variant.label;
    button.addEventListener("click", () => {
      activeVariants[route.id] = variant.id;
      activeStepIndex = 0;
      renderRoute();
    });
    variantButtons.appendChild(button);
  });
}

function getActiveVariantId(route) {
  return activeVariants[route.id] || route.variants?.[0]?.id;
}

function getVisibleSteps(route = routeData[activeRouteIndex]) {
  if (!route.variants?.length) {
    return route.steps.map((step, originalIndex) => ({ step, originalIndex }));
  }

  const activeVariant = route.variants.find(variant => variant.id === getActiveVariantId(route)) || route.variants[0];
  return route.steps
    .map((step, originalIndex) => ({ step, originalIndex }))
    .filter(({ step }) => activeVariant.groups.includes(step.group));
}

function getMapPoiIndices(route = routeData[activeRouteIndex]) {
  const defaultOrder = route.pois.map((_, index) => index);
  const variantOrder = route.variantPoiOrder?.[getActiveVariantId(route)] || defaultOrder;
  return variantOrder.filter(index => !route.mapHiddenPoiIndices?.includes(index));
}

function getActiveStep() {
  const visibleSteps = getVisibleSteps();
  const safeIndex = Math.min(activeStepIndex, visibleSteps.length - 1);
  activeStepIndex = Math.max(0, safeIndex);
  return visibleSteps[activeStepIndex].step;
}

function getVisibleImportedTrack(route) {
  const track = importedTracks[route.id];
  if (!track?.coords.length) return null;
  const variantId = getActiveVariantId(route);
  const variantCoords = track.variantCoords?.[variantId];
  if (variantCoords?.length) {
    const variant = route.variants?.find(item => item.id === variantId);
    return {
      ...track,
      name: `${track.name} · ${variant?.label || variantId}`,
      coords: variantCoords
    };
  }
  if (!track.variant) return track;
  if (variantId === track.variant) return track;
  if (!track.commonCoords?.length) return null;
  return {
    ...track,
    name: `${track.name} · Fredarola까지 공통 구간`,
    coords: track.commonCoords,
    source: `${track.source} · A/B 공통`
  };
}

function selectRoute(index) {
  setMapStepSheetOpen(false);
  activeRouteIndex = index;
  activeStepIndex = 0;
  activeLayer = "all";
  renderRoute();
}

function renderRoute() {
  const route = routeData[activeRouteIndex];
  const visibleSteps = getVisibleSteps(route);
  appShell.style.setProperty("--route-background", `url("${route.backgroundImage}")`);
  routeEyebrow.textContent = route.day;
  routeTitle.textContent = route.title;
  renderSummary(route);
  renderFilters();

  [...routeTabs.children, ...mobileRouteTabs.children].forEach((button, index) => {
    button.classList.toggle("active", index % routeData.length === activeRouteIndex);
  });

  renderVariants();
  renderMap();
  renderSteps();
  renderPois();
  loadWeather(route);
  updateCurrentStep();
}

function renderSummary(route) {
  const steps = getVisibleSteps(route).map(({ step }) => step);
  const configuredTrailKm = route.variantTrailKm?.[getActiveVariantId(route)] ?? route.trailKm;
  const trailKm = Number.isFinite(configuredTrailKm)
    ? configuredTrailKm
    : steps
      .filter(step => step.mode === "trail")
      .reduce((sum, step) => sum + stepDistanceKm(step.coords), 0);
  const flowModes = steps.reduce((modes, step) => {
    if (modes.at(-1) !== step.mode) modes.push(step.mode);
    return modes;
  }, []);
  const chips = flowModes
    .map(mode => `
      <span class="mode-chip"><i style="background:${colors[mode]}"></i>${labels[mode]}</span>
    `)
    .join("");
  routeSummary.innerHTML = `
    <div class="summary-total"><strong>${trailKm.toFixed(1)}km</strong><span>트레킹 거리</span></div>
    <div class="mode-chips">${chips}</div>
  `;
}

function renderMap({ focusActiveStep = false } = {}) {
  clearMap();
  const route = routeData[activeRouteIndex];
  const importedTrack = getVisibleImportedTrack(route);
  const visibleSteps = getVisibleSteps(route);
  const boundsPoints = [];
  const trackStepSegments = buildTrackStepSegments(importedTrack, visibleSteps);
  let activeLine = null;
  let activeLineCoords = null;

  if (importedTrack?.coords.length) {
    importedTrackLayer = L.polyline(importedTrack.coords, {
      color: "#33413d",
      weight: 8,
      opacity: activeLayer === "all" ? 0.2 : 0.08,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(map);
    boundsPoints.push(...importedTrack.coords);
  }

  visibleSteps.forEach(({ step }, index) => {
    if (step.mapHidden) return;
    const visible = activeLayer === "all" || activeLayer === step.mode;
    const isActive = index === activeStepIndex;
    const lineCoords = trackStepSegments.get(index) || step.coords;
    const line = L.polyline(lineCoords, {
      color: colors[step.mode],
      weight: step.approximateConnector ? (isActive ? 5 : 3) : (isActive ? 8 : 5),
      opacity: visible ? isActive ? 1 : step.approximateConnector ? 0.85 : 0.78 : 0.08,
      dashArray: step.approximateConnector ? "3 9" : null,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(map);
    line.on("click", () => selectStep(index));
    drawnLayers.push(line);
    boundsPoints.push(...lineCoords);
    if (isActive) {
      activeLine = line;
      activeLineCoords = lineCoords;
    }
  });

  activeLine?.bringToFront();

  getMapPoiIndices(route).forEach((poiIndex, displayIndex) => {
    const [name, description, coord, photo, recommendedMenu] = route.pois[poiIndex];
    const mode = pointModeForIndex(route, poiIndex);
    const popupCredit = photo?.author && photo?.source && photo?.license && photo?.licenseUrl ? `
      <small class="poi-popup-credit">사진: <a href="${photo.source}" target="_blank" rel="noopener">${photo.author}</a> · <a href="${photo.licenseUrl}" target="_blank" rel="noopener">${photo.license}</a></small>
    ` : "";
    const popupPhoto = photo ? `
      <img class="poi-popup-image" src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
      ${popupCredit}
    ` : "";
    const menuContent = recommendedMenu?.length ? `
      <details class="poi-menu-disclosure">
        <summary class="poi-menu-toggle">추천 메뉴</summary>
        <div class="poi-menu-panel">
          <div class="poi-menu-grid">
            ${recommendedMenu.map(menu => `
              <figure class="poi-menu-item">
                <button class="poi-menu-photo-button" type="button" aria-label="${menu.name} 사진 크게 보기">
                  <img src="${menu.photo}" alt="${name} 추천 메뉴 ${menu.name}" loading="lazy" decoding="async">
                </button>
                <figcaption>${menu.name}</figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
      </details>
    ` : "";
    const marker = L.marker(coord, {
      icon: L.divIcon({
        className: "route-marker-hit",
        html: `<div class="route-pin ${mode}">${displayIndex + 1}</div>`,
        iconSize: [44, 44],
        iconAnchor: [22, 22]
      })
    }).bindPopup(`${popupPhoto}<strong>${name}</strong><span>${description}</span>${menuContent}`).addTo(map);
    if (recommendedMenu?.length) {
      marker.on("popupopen", event => {
        event.popup.getElement()?.querySelectorAll(".poi-menu-photo-button").forEach(button => {
          if (button.dataset.lightboxBound) return;
          button.dataset.lightboxBound = "true";
          button.addEventListener("click", clickEvent => {
            clickEvent.stopPropagation();
            const image = button.querySelector("img");
            foodPhotoDialogImage.src = image.src;
            foodPhotoDialogImage.alt = image.alt;
            foodPhotoDialogCaption.textContent = image.alt;
            foodPhotoDialog.showModal();
          });
        });
      });
    }
    poiMarkers.push(marker);
    boundsPoints.push(coord);
  });

  const mobileBottomPadding = window.matchMedia("(max-width: 1023px)").matches ? 110 : 28;
  const hiddenStepFocus = focusActiveStep && !activeLineCoords
    ? getMapHiddenStepFocus(route, getActiveStep())
    : null;

  if (focusActiveStep && activeLineCoords?.length) {
    map.fitBounds(L.latLngBounds(activeLineCoords), {
      paddingTopLeft: [28, 28],
      paddingBottomRight: [28, mobileBottomPadding],
      maxZoom: 16,
      animate: true
    });
  } else if (hiddenStepFocus) {
    map.setView(hiddenStepFocus, Math.max(route.zoom, 15), { animate: true });
  } else {
    map.fitBounds(L.latLngBounds(boundsPoints), { padding: [28, 28], maxZoom: route.zoom });
  }
  window.setTimeout(() => map.invalidateSize(), 50);
}

function clearMap() {
  drawnLayers.forEach(layer => layer.remove());
  poiMarkers.forEach(marker => marker.remove());
  if (importedTrackLayer) importedTrackLayer.remove();
  drawnLayers = [];
  poiMarkers = [];
  importedTrackLayer = null;
}

function pointModeForIndex(route, index) {
  const poiCoord = route.pois[index][2];
  const step = route.steps.find(item => item.coords.some(coord => sameCoord(coord, poiCoord)));
  return step ? step.mode : "trail";
}

function sameCoord(a, b) {
  return Math.abs(a[0] - b[0]) < 0.00001 && Math.abs(a[1] - b[1]) < 0.00001;
}

function getMapHiddenStepFocus(route, step) {
  if (!step.mapHidden) return null;
  const visiblePoiCoords = getMapPoiIndices(route).map(index => route.pois[index][2]);
  const endpoints = [step.coords[0], step.coords.at(-1)];
  return endpoints.find(endpoint => visiblePoiCoords.some(coord => sameCoord(coord, endpoint))) || null;
}

function buildTrackStepSegments(importedTrack, visibleSteps) {
  const segments = new Map();
  if (!importedTrack?.coords.length) return segments;

  let searchIndex = 0;
  visibleSteps.forEach(({ step }, index) => {
    if (step.mapHidden || step.approximateConnector) return;
    const startMatch = findClosestTrackIndex(importedTrack.coords, step.coords[0], searchIndex);
    const endMatch = findClosestTrackIndex(importedTrack.coords, step.coords.at(-1), startMatch.index);
    if (startMatch.distance > 0.6 || endMatch.distance > 0.6 || endMatch.index <= startMatch.index) return;

    segments.set(index, importedTrack.coords.slice(startMatch.index, endMatch.index + 1));
    searchIndex = endMatch.index;
  });
  return segments;
}

function findClosestTrackIndex(coords, target, startIndex = 0) {
  let match = { index: startIndex, distance: Number.POSITIVE_INFINITY };
  for (let index = startIndex; index < coords.length; index += 1) {
    const pointDistance = distance(coords[index], target);
    if (pointDistance < match.distance) match = { index, distance: pointDistance };
  }
  return match;
}

function selectStep(index) {
  setMapStepSheetOpen(false);
  activeStepIndex = index;
  renderMap({ focusActiveStep: true });
  renderSteps();
  updateCurrentStep();
}

function renderSteps() {
  const route = routeData[activeRouteIndex];
  const visibleSteps = getVisibleSteps(route);
  stepList.innerHTML = "";
  visibleSteps.forEach(({ step }, index) => {
    const filtered = activeLayer !== "all" && step.mode !== activeLayer;
    const item = document.createElement("li");
    item.className = `step-card ${step.mode}`;
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.classList.toggle("active", index === activeStepIndex);
    item.style.display = filtered ? "none" : "";
    item.addEventListener("click", () => selectStep(index));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectStep(index);
      }
    });

    const stepLabel = step.variantRange?.[getActiveVariantId(route)] || step.range || `${index + 1}`;
    const km = stepDistanceKm(step.coords);
    const distanceLabel = step.mode === "trail" ? `<span class="step-distance">${km.toFixed(1)}km</span>` : "";
    item.innerHTML = `
      <span class="step-index">${stepLabel}</span>
      <div>
        <div class="step-title-row">
          <h4>${step.title}</h4>
          ${distanceLabel}
        </div>
        <p>${step.meta}</p>
      </div>
    `;
    stepList.appendChild(item);
  });
}

function renderPois() {
  const route = routeData[activeRouteIndex];
  if (!route.pois.length) {
    poiSection.hidden = true;
    poiToggleButton.hidden = true;
    photoCredits.hidden = true;
    return;
  }

  poiSection.hidden = false;
  poiSection.querySelector(".poi-layout").classList.toggle("no-image", !route.poiImage);
  poiImage.hidden = !route.poiImage;
  if (route.poiImage) {
    poiImage.src = route.poiImage;
    poiImage.alt = `${route.title} 산장과 주요 포인트`;
  }
  poiList.innerHTML = "";
  const poiIndices = getMapPoiIndices(route);
  const isExpanded = expandedPoiRoutes.has(route.id);
  poiIndices.forEach((poiIndex, displayIndex) => {
    const [name, description, , photo] = route.pois[poiIndex];
    const item = document.createElement("div");
    item.className = "poi-item";
    item.classList.toggle("has-photo", Boolean(photo));
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.hidden = !isExpanded && displayIndex >= 6;
    item.innerHTML = photo ? `
      <img class="poi-item-photo" src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
      <div class="poi-item-copy"><strong>${displayIndex + 1}. ${name}</strong><span>${description}</span></div>
    ` : `<strong>${displayIndex + 1}. ${name}</strong><span>${description}</span>`;
    const focusPoi = () => {
      const marker = poiMarkers[displayIndex];
      if (!marker) return;
      document.querySelector(".map-stage").scrollIntoView({ behavior: "smooth", block: "start" });
      map.setView(marker.getLatLng(), Math.max(map.getZoom(), 15), { animate: true });
      marker.openPopup();
    };
    item.addEventListener("click", focusPoi);
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        focusPoi();
      }
    });
    poiList.appendChild(item);
  });

  const creditedPois = poiIndices
    .map(index => ({ name: route.pois[index][0], photo: route.pois[index][3] }))
    .filter(item => item.photo?.author && item.photo?.source && item.photo?.license && item.photo?.licenseUrl);
  photoCredits.hidden = creditedPois.length === 0;
  photoCredits.innerHTML = creditedPois.length ? `
    <p>사진 출처</p>
    <ul>${creditedPois.map(({ name, photo }) => `
      <li>${name} · <a href="${photo.source}" target="_blank" rel="noopener">${photo.author}</a> · <a href="${photo.licenseUrl}" target="_blank" rel="noopener">${photo.license}</a></li>
    `).join("")}</ul>
  ` : "";

  poiToggleButton.hidden = poiIndices.length <= 6;
  poiToggleButton.textContent = isExpanded ? "포인트 접기" : `포인트 ${poiIndices.length - 6}개 더 보기`;
  poiToggleButton.setAttribute("aria-expanded", String(isExpanded));
}

function updateCurrentStep() {
  const route = routeData[activeRouteIndex];
  const step = getActiveStep();
  const stepLabel = step.variantRange?.[getActiveVariantId(route)] || step.range || `${activeStepIndex + 1}`;
  const stepMetric = step.mode === "trail"
    ? `${labels[step.mode]} · ${stepDistanceKm(step.coords).toFixed(1)}km`
    : `${labels[step.mode]} · ${step.meta.split(" · ")[0]}`;
  currentStepTitle.textContent = step.title;
  currentStepMeta.textContent = step.meta;
  currentStepNote.textContent = step.note;
  mapStepDetailMeta.textContent = step.meta;
  mapStepDetailNote.textContent = step.note;
  mapCurrentStep.dataset.mode = step.mode;
  mapCurrentStep.innerHTML = `
    <span>${stepLabel}</span>
    <strong>${step.title}</strong>
    <small>${stepMetric}</small>
  `;
  renderMapStepSheet();
}

function renderMapStepSheet() {
  const route = routeData[activeRouteIndex];
  const visibleSteps = getVisibleSteps(route);
  previousStepButton.disabled = activeStepIndex <= 0;
  nextStepButton.disabled = activeStepIndex >= visibleSteps.length - 1;
  mapStepList.innerHTML = "";

  visibleSteps.forEach(({ step }, index) => {
    const stepLabel = step.variantRange?.[getActiveVariantId(route)] || step.range || `${index + 1}`;
    const metric = step.mode === "trail"
      ? `${step.meta} · ${stepDistanceKm(step.coords).toFixed(1)}km`
      : step.meta;
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.className = `map-sheet-step ${step.mode}`;
    button.classList.toggle("active", index === activeStepIndex);
    button.type = "button";
    button.innerHTML = `
      <span class="map-sheet-step-index">${stepLabel}</span>
      <span><strong>${step.title}</strong><small>${metric}</small></span>
    `;
    button.addEventListener("click", () => {
      activeLayer = "all";
      renderFilters();
      selectStep(index);
    });
    listItem.appendChild(button);
    mapStepList.appendChild(listItem);
  });
}

function setMapStepSheetOpen(open) {
  isMapStepSheetOpen = open;
  mapStepSheet.classList.toggle("open", open);
  mapStepSheetExpanded.hidden = !open;
  mapCurrentStep.setAttribute("aria-expanded", String(open));
  mapCurrentStep.setAttribute("aria-label", open ? "전체 구간 목록 닫기" : "전체 구간 목록 열기");
  if (open) {
    window.requestAnimationFrame(() => {
      mapStepList.querySelector(".active")?.scrollIntoView({ block: "nearest" });
    });
  }
}

function selectAdjacentStep(offset) {
  const lastIndex = getVisibleSteps().length - 1;
  const nextIndex = Math.max(0, Math.min(lastIndex, activeStepIndex + offset));
  if (nextIndex === activeStepIndex) return;
  activeLayer = "all";
  renderFilters();
  selectStep(nextIndex);
}

function distance(a, b) {
  return Math.hypot((b[0] - a[0]) * 111, (b[1] - a[1]) * 74);
}

function stepDistanceKm(coords) {
  let total = 0;
  for (let i = 0; i < coords.length - 1; i += 1) {
    total += distance(coords[i], coords[i + 1]);
  }
  return total;
}

async function loadWeather(route) {
  const token = ++weatherRequestToken;
  const [latitude, longitude] = route.weather.coords;
  weatherPlace.textContent = route.weather.name;
  weatherBody.innerHTML = '<p class="muted">Open-Meteo 예보를 불러오는 중입니다.</p>';

  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: [
      "temperature_2m",
      "apparent_temperature",
      "precipitation",
      "weather_code",
      "cloud_cover",
      "wind_speed_10m",
      "wind_gusts_10m"
    ].join(","),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "precipitation_probability_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max"
    ].join(","),
    timezone: "auto",
    forecast_days: "1",
    wind_speed_unit: "kmh"
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (token !== weatherRequestToken) return;
    renderWeather(data);
  } catch (error) {
    if (token !== weatherRequestToken) return;
    weatherBody.innerHTML = `
      <p class="muted">날씨를 불러오지 못했습니다. 네트워크 연결 후 다시 시도하세요.</p>
    `;
  }
}

function renderWeather(data) {
  const current = data.current || {};
  const daily = data.daily || {};
  const code = current.weather_code ?? daily.weather_code?.[0];
  const condition = describeWeather(code);
  const temp = formatNumber(current.temperature_2m);
  const apparent = formatNumber(current.apparent_temperature);
  const wind = formatNumber(current.wind_speed_10m);
  const gust = formatNumber(current.wind_gusts_10m);
  const rainChance = formatNumber(daily.precipitation_probability_max?.[0]);
  const rainSum = formatNumber(daily.precipitation_sum?.[0], 1);
  const high = formatNumber(daily.temperature_2m_max?.[0]);
  const low = formatNumber(daily.temperature_2m_min?.[0]);
  const advice = buildWeatherAdvice({
    code,
    rainChance: daily.precipitation_probability_max?.[0],
    windGust: current.wind_gusts_10m ?? daily.wind_gusts_10m_max?.[0],
    low: daily.temperature_2m_min?.[0]
  });

  weatherBody.innerHTML = `
    <div class="weather-main">
      <span class="weather-temp">${temp}°C</span>
      <span class="weather-desc">${condition} · 체감 ${apparent}°C</span>
    </div>
    <div class="weather-metrics">
      <div class="weather-metric"><strong>${low}° / ${high}°</strong><span>오늘 기온</span></div>
      <div class="weather-metric"><strong>${rainChance}% · ${rainSum}mm</strong><span>강수 가능성</span></div>
      <div class="weather-metric"><strong>${wind}km/h</strong><span>현재 바람</span></div>
      <div class="weather-metric"><strong>${gust}km/h</strong><span>돌풍</span></div>
    </div>
    <p class="weather-advice">${advice}</p>
  `;
}

function describeWeather(code) {
  const descriptions = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "상고대 안개",
    51: "약한 이슬비",
    53: "이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "비",
    65: "강한 비",
    71: "약한 눈",
    73: "눈",
    75: "강한 눈",
    80: "약한 소나기",
    81: "소나기",
    82: "강한 소나기",
    95: "뇌우",
    96: "우박 동반 뇌우",
    99: "강한 우박 동반 뇌우"
  };
  return descriptions[code] || "예보 확인";
}

function buildWeatherAdvice({ code, rainChance, windGust, low }) {
  const gear = [];
  const cautions = [];
  const rainy = rainChance >= 50 || [51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(code);
  const snowy = [71, 73, 75].includes(code);
  const thunderstorm = [95, 96, 99].includes(code);

  if (rainy) gear.push("방수 재킷");
  if (windGust >= 35) gear.push("바람막이");
  if (low <= 8) gear.push("따뜻한 겉옷");

  if (thunderstorm) {
    cautions.push("뇌우 가능성이 있어 능선 진입 전 현지 상황을 꼭 확인해 주세요.");
  }
  if (windGust >= 35) {
    cautions.push("능선과 노출 구간에서는 강한 돌풍에 주의해 주세요.");
  }
  if ([45, 48].includes(code)) {
    cautions.push("안개로 시야가 제한될 수 있으니 갈림길과 코스 표식을 주의해서 확인해 주세요.");
  }
  if (snowy) {
    cautions.push("눈이나 결빙 가능성이 있으니 미끄럼 방지 장비와 현지 통제 여부를 확인해 주세요.");
  }

  let gearAdvice = "";
  if (gear.length === 1) {
    gearAdvice = `${withObjectParticle(gear[0])} 챙겨 주세요.`;
  } else if (gear.length > 1) {
    gearAdvice = `${gear.slice(0, -1).join(", ")}와 ${withObjectParticle(gear.at(-1))} 챙겨 주세요.`;
  }
  if (!gearAdvice && !cautions.length) {
    return "대체로 무난한 날씨지만, 산악 지역은 변화가 빠르니 출발 전 바람과 강수 상황을 한 번 더 확인해 주세요.";
  }
  return [gearAdvice, ...cautions].filter(Boolean).join(" ");
}

function withObjectParticle(text) {
  const lastCode = text.charCodeAt(text.length - 1) - 0xac00;
  const hasFinalConsonant = lastCode >= 0 && lastCode <= 11171 && lastCode % 28 !== 0;
  return `${text}${hasFinalConsonant ? "을" : "를"}`;
}

function formatNumber(value, digits = 0) {
  if (!Number.isFinite(value)) return "--";
  return value.toFixed(digits);
}

async function loadBuiltInTracks() {
  const routesWithTracks = routeData.filter(route => route.trackFile || route.trackFiles);

  await Promise.all(routesWithTracks.map(async route => {
    try {
      const embeddedTrack = getEmbeddedTrack(route.id);
      let loadedTrack;

      if (embeddedTrack) {
        loadedTrack = embeddedTrack;
      } else if (route.trackFiles) {
        const variantEntries = await Promise.all(
          Object.entries(route.trackFiles).map(async ([variantId, trackFile]) => {
            const response = await fetch(trackFile);
            if (!response.ok) throw new Error(`${response.status}`);
            const text = await response.text();
            const parsed = parseTrackFile(text, trackFile);
            return [variantId, parsed.coords];
          })
        );
        loadedTrack = {
          name: "코스별 GPX",
          coords: variantEntries[0][1],
          variantCoords: Object.fromEntries(variantEntries),
          source: route.trackSource
        };
      } else {
        const response = await fetch(route.trackFile);
        if (!response.ok) throw new Error(`${response.status}`);
        const text = await response.text();
        const parsed = parseTrackFile(text, route.trackFile);
        loadedTrack = {
          name: route.trackFile.split("/").pop(),
          coords: parsed.coords,
          source: route.trackSource,
          variant: route.trackVariant || null
        };
      }

      if (loadedTrack.coords.length < 2) throw new Error("트랙 포인트 부족");
      loadedTrack = prepareBuiltInTrack(route, loadedTrack);

      if (!importedTracks[route.id]) {
        importedTracks[route.id] = loadedTrack;
      }
    } catch (error) {
      console.warn(`Failed to load built-in track for ${route.id}:`, error);
    }
  }));

  renderMap();
}

function prepareBuiltInTrack(route, track) {
  const prepared = {
    ...track,
    variant: route.trackVariant || track.variant || null
  };
  if (route.trackVariantRanges) {
    prepared.variantCoords = Object.fromEntries(
      Object.entries(route.trackVariantRanges).map(([variantId, ranges]) => [
        variantId,
        ranges.flatMap(([start, end]) => prepared.coords.slice(start, end + 1))
      ])
    );
  }
  if (!route.trackCommonEnd || !prepared.coords.length) return prepared;

  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;
  prepared.coords.forEach((coord, index) => {
    const coordDistance = distance(coord, route.trackCommonEnd);
    if (coordDistance < closestDistance) {
      closestDistance = coordDistance;
      closestIndex = index;
    }
  });
  prepared.commonCoords = prepared.coords.slice(0, closestIndex + 1);
  return prepared;
}

function getEmbeddedTrack(routeId) {
  if (!window.builtInTracks) return null;
  const key = routeId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  const track = window.builtInTracks[key];
  if (!track?.coords?.length) return null;
  return {
    name: track.name,
    coords: track.coords,
    variantCoords: track.variantCoords,
    source: `${track.source} · 내장 데이터`,
    variant: routeData.find(route => route.id === routeId)?.trackVariant || null
  };
}

function parseTrackFile(text, fileName) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");
  if (doc.querySelector("parsererror")) {
    throw new Error("XML 형식이 올바르지 않습니다.");
  }

  const lowerName = fileName.toLowerCase();
  if (lowerName.endsWith(".kml")) {
    return { coords: parseKmlCoords(doc) };
  }

  return { coords: parseGpxCoords(doc) };
}

function parseGpxCoords(doc) {
  const points = [...doc.querySelectorAll("trkpt")];
  const routePoints = points.length ? points : [...doc.querySelectorAll("rtept")];
  return routePoints.map(point => [
    Number(point.getAttribute("lat")),
    Number(point.getAttribute("lon"))
  ]).filter(isValidCoord);
}

function parseKmlCoords(doc) {
  const coordinateBlocks = [...doc.querySelectorAll("LineString coordinates, coordinates")];
  const coords = [];

  coordinateBlocks.forEach(block => {
    const values = block.textContent.trim().split(/\s+/);
    values.forEach(value => {
      const [lng, lat] = value.split(",").map(Number);
      if (Number.isFinite(lat) && Number.isFinite(lng)) coords.push([lat, lng]);
    });
  });

  const gxCoords = [...doc.getElementsByTagName("gx:coord"), ...doc.getElementsByTagName("coord")];
  gxCoords.forEach(block => {
    const [lng, lat] = block.textContent.trim().split(/\s+/).map(Number);
    if (Number.isFinite(lat) && Number.isFinite(lng)) coords.push([lat, lng]);
  });

  return coords;
}

function isValidCoord(coord) {
  return Number.isFinite(coord[0]) && Number.isFinite(coord[1]);
}

mapCurrentStep.addEventListener("click", () => {
  setMapStepSheetOpen(!isMapStepSheetOpen);
});

previousStepButton.addEventListener("click", () => selectAdjacentStep(-1));
nextStepButton.addEventListener("click", () => selectAdjacentStep(1));
closeMapStepSheet.addEventListener("click", () => setMapStepSheetOpen(false));

poiToggleButton.addEventListener("click", () => {
  const routeId = routeData[activeRouteIndex].id;
  if (expandedPoiRoutes.has(routeId)) {
    expandedPoiRoutes.delete(routeId);
  } else {
    expandedPoiRoutes.add(routeId);
  }
  renderPois();
});

closeFoodPhotoDialog.addEventListener("click", () => foodPhotoDialog.close());
foodPhotoDialog.addEventListener("click", event => {
  if (event.target === foodPhotoDialog) foodPhotoDialog.close();
});

initMap();
buildTabs(routeTabs);
buildTabs(mobileRouteTabs);
buildFilters();
renderFilters();
renderRoute();
loadBuiltInTracks();
