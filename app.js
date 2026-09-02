const colors = {
  trail: "#d85149",
  cable: "#4b9ecf",
  lift: "#d8a62b",
  car: "#57a575"
};

const labels = {
  all: "전체",
  trail: "트레킹",
  cable: "케이블카",
  lift: "리프트",
  car: "차량"
};

const routeData = [
  {
    id: "rosengarten",
    day: "Day 1",
    title: "로젠가르텐 & 카레짜",
    backgroundImage: "assets/01-rosengarten-map.jpg",
    summary: "숙소에서 버스로 노바레반테까지 이동해 케이블카를 타고 Malga Frommer에서 곤돌라로 환승한 뒤 쾰너 산장에 올라 중식, 이후 파올리나 산장까지 트레킹하고 리프트·버스로 카레짜 호수 산책 후 숙소로 복귀합니다.",
    center: [46.4277, 11.6077],
    zoom: 13,
    weather: { name: "쾰너 산장", coords: [46.44233, 11.612015] },
    poiImage: null,
    trackFile: "assets/tracks/day-01-rosengarten.gpx",
    trackSource: "Outdooractive · Geotrail 9 to Karersee/Carezza via Kuregg/Monte Coronelle",
    trackPlayback: true,
    pois: [
      ["Nova Levante", "출발 지점", [46.432267, 11.54574]],
      ["Malga Frommer", "케이블카 하차 · 곤돌라 환승", [46.4433, 11.5894]],
      ["Kölner Hütte", "곤돌라 상부 · 중식", [46.44233, 11.612015]],
      ["Paolina", "트레킹 도착 산장", [46.415716, 11.614615]],
      ["Carezza", "리프트 하부/버스 연결", [46.407956, 11.591893]],
      ["Carezza/Karersee", "호수 산책", [46.40934, 11.57515]]
    ],
    steps: [
      {
        range: "출발 · 버스",
        title: "숙소 → Nova Levante",
        mode: "car",
        meta: "버스 이동 · 일정 시작",
        note: "숙소에서 단체 버스를 타고 Nova Levante 케이블카 탑승장까지 이동합니다. 이 차량 이동선은 트레킹 지도에는 표시하지 않습니다.",
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
        note: "카레짜 호수 산책을 마친 뒤 단체 버스를 타고 숙소로 복귀합니다. 이 차량 이동선은 트레킹 지도에는 표시하지 않습니다.",
        mapHidden: true,
        coords: [[46.40934, 11.57515], [46.4309, 11.6934]]
      }
    ]
  },
  {
    id: "marmolada",
    day: "Day 2",
    title: "마르몰라다 & 사쓰 포르도이",
    backgroundImage: "assets/02-marmolada-map.jpg",
    summary: "Alba에서 Col dei Rossi와 Fredarola까지 함께 이동한 뒤 A팀은 Passo Pordoi로 바로 가고, B팀은 Viel dal Pan을 왕복한 뒤 같은 길에 합류합니다. 전원 Sass Pordoi 전망대를 왕복하고 하부역 앞 주차장에서 단체 버스로 QC Terme와 숙소로 이동합니다.",
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
      ["Alba", "케이블카 출발", [46.457509, 11.788861]],
      ["Col dei Rossi", "케이블카 상부 하차", [46.474546, 11.802258]],
      ["Rifugio Fredarola", "A/B팀 공통 산장", [46.477591, 11.814813]],
      ["Passo Pordoi", "A팀/B팀 합류 · 케이블카 하부역 · 버스 주차장", [46.488272, 11.810704]],
      ["Rifugio Viel dal Pan", "B팀 왕복 지점", [46.474215, 11.834069]],
      ["Sass Pordoi", "전망대 · 자유시간", [46.500312, 11.807728]],
      ["QC Terme Dolomiti", "온천", [46.4276, 11.6865]],
      ["숙소", "온천 후 복귀", [46.4309, 11.6934]]
    ],
    steps: [
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
        note: "케이블카 하부역 앞 주차장에서 단체 버스를 타고 QC Terme Dolomiti까지 이동해 온천 시간을 가집니다. 이 차량 이동선은 트레킹 지도에는 표시하지 않습니다.",
        mapHidden: true,
        coords: [[46.488272, 11.810704], [46.4638, 11.7687], [46.4386, 11.7182], [46.4276, 11.6865]]
      },
      {
        range: "마무리 · 버스",
        group: "join",
        title: "QC Terme Dolomiti → 숙소",
        mode: "car",
        meta: "전원 · 온천 후 복귀",
        note: "온천을 마친 뒤 단체 버스로 숙소에 복귀합니다. 이 차량 이동선은 트레킹 지도에는 표시하지 않습니다.",
        mapHidden: true,
        coords: [[46.4276, 11.6865], [46.4309, 11.6934]]
      }
    ]
  },
  {
    id: "seceda",
    day: "Day 3",
    title: "오르티세이 & 세체다",
    backgroundImage: "assets/03-seceda-map.jpg",
    summary: "오르티세이에서 세체다 케이블카로 올라 Baita Sofie, Pieralongia, Troier, Fermeda 쪽 산장 루프를 돈 뒤 복귀합니다.",
    center: [46.5925, 11.7308],
    zoom: 14,
    weather: { name: "Seceda", coords: [46.6003, 11.7248] },
    poiImage: "assets/seceda-poi.jpg",
    pois: [
      ["Ortisei", "케이블카 하부", [46.5766, 11.6718]],
      ["Seceda", "상부 능선", [46.6003, 11.7248]],
      ["Baita Sofie", "산장", [46.597665, 11.727176]],
      ["Baita Troier", "산장", [46.5908, 11.7358]],
      ["Malga Pieralongia", "포토 포인트 산장", [46.597559, 11.740383]],
      ["Baita Mastle", "산장", [46.5925, 11.7258]],
      ["Baita Daniel", "산장", [46.5884, 11.7216]],
      ["Baita Fermeda", "복귀 산장", [46.5893, 11.7256]],
      ["Baita Cuca", "분기 산장 후보", [46.5868, 11.7181]],
      ["Malga Neidia", "하단 산장 후보", [46.5836, 11.7128]],
      ["Baita Odles", "복귀 동선 산장", [46.5911, 11.7185]],
      ["Col Raiser", "리프트/케이블카 연결", [46.5867, 11.7314]],
      ["Seceda Cross", "능선 사진 포인트", [46.6012, 11.724]]
    ],
    steps: [
      {
        title: "Ortisei → Seceda",
        mode: "cable",
        meta: "케이블카 · 고도 상승",
        note: "오르티세이에서 세체다 능선으로 오르는 접근 이동입니다.",
        coords: [[46.5766, 11.6718], [46.5945, 11.7053], [46.6003, 11.7248]]
      },
      {
        title: "Seceda → Baita Sofie",
        mode: "trail",
        meta: "트레킹 · 능선 시작",
        note: "상부 능선에서 식사 후보 산장으로 짧게 연결됩니다.",
        coords: [[46.6003, 11.7248], [46.597665, 11.727176]]
      },
      {
        title: "Baita Sofie → Baita Troier",
        mode: "trail",
        meta: "트레킹 · 산장 연결",
        note: "상부 산장 라인에서 Troier 방향으로 내려서는 첫 분기 구간입니다.",
        coords: [[46.597665, 11.727176], [46.5944, 11.7318], [46.5908, 11.7358]]
      },
      {
        title: "Baita Troier → Pieralongia",
        mode: "trail",
        meta: "트레킹 · 포토 포인트",
        note: "피에라론지아 바위와 오들 산군을 보는 핵심 포토 구간입니다.",
        coords: [[46.5908, 11.7358], [46.5941, 11.7396], [46.597559, 11.740383]]
      },
      {
        title: "Pieralongia → Mastle",
        mode: "trail",
        meta: "트레킹 · 루프 반환점",
        note: "참고사진의 산장 목록 중 Mastle 방향으로 돌아나오는 구간입니다.",
        coords: [[46.597559, 11.740383], [46.5961, 11.7337], [46.5925, 11.7258]]
      },
      {
        title: "Mastle → Daniel → Fermeda",
        mode: "trail",
        meta: "트레킹 · 하단 산장 라인",
        note: "Daniel과 Fermeda를 지나 세체다 복귀 또는 Col Raiser 분기로 이어집니다.",
        coords: [[46.5925, 11.7258], [46.5884, 11.7216], [46.5893, 11.7256]]
      },
      {
        title: "Fermeda → Cuca → Neidia",
        mode: "trail",
        meta: "트레킹 · 확장 후보",
        note: "컨디션에 따라 더 넓게 돌 수 있는 하단 산장 후보 구간입니다.",
        coords: [[46.5893, 11.7256], [46.5868, 11.7181], [46.5836, 11.7128]]
      },
      {
        title: "Neidia → Odles → Col Raiser",
        mode: "trail",
        meta: "트레킹 · 리프트 연결",
        note: "Odles와 Col Raiser 쪽으로 내려서는 대체 복귀 라인입니다.",
        coords: [[46.5836, 11.7128], [46.5911, 11.7185], [46.5867, 11.7314]]
      },
      {
        title: "Seceda → Ortisei",
        mode: "cable",
        meta: "케이블카 · 호텔 이동 전 복귀",
        note: "케이블카로 오르티세이 복귀 후 몬테 파나 호텔로 이동합니다.",
        coords: [[46.6003, 11.7248], [46.5945, 11.7053], [46.5766, 11.6718]]
      }
    ]
  },
  {
    id: "alpe-siusi",
    day: "Day 4",
    title: "알페 디 시우시",
    backgroundImage: "assets/04-alpe-siusi-map.jpg",
    summary: "Ortisei에서 Mont Seuc로 오른 뒤 Sanon, Hotel Ritsch, Saltria 방향으로 고원 루프를 걷고 Florian 리프트를 선택 구간으로 둡니다.",
    center: [46.5484, 11.6515],
    zoom: 13,
    weather: { name: "Mont Seuc", coords: [46.558123, 11.664884] },
    poiImage: "assets/alpe-siusi-poi.jpg",
    pois: [
      ["Ortisei", "케이블카 하부", [46.5766, 11.6718]],
      ["Mont Seuc", "상부 승강장", [46.558123, 11.664884]],
      ["Malga Contrin", "초반 산장 후보", [46.5539, 11.6531]],
      ["Hotel Icaro", "고원 내부 호텔", [46.5455, 11.6621]],
      ["Malga Schgaguler", "조망 산장", [46.5525, 11.6767]],
      ["Baita Sanon", "산장", [46.547882, 11.65495]],
      ["Hotel Ritsch", "고원 중심", [46.539398, 11.6452]],
      ["Malga Rauch", "복귀 방향 산장", [46.5412, 11.6695]],
      ["Saltria", "루프 원거리", [46.5307, 11.6609]],
      ["Florian", "리프트 방향", [46.5318, 11.6777]]
    ],
    steps: [
      {
        title: "Ortisei → Mont Seuc",
        mode: "cable",
        meta: "케이블카 · 고원 접근",
        note: "오르티세이에서 알페 디 시우시 고원 위로 올라갑니다.",
        coords: [[46.5766, 11.6718], [46.558123, 11.664884]]
      },
      {
        title: "Mont Seuc → Malga Contrin",
        mode: "trail",
        meta: "트레킹 · 루프 시작",
        note: "고원 초지로 들어서며 Contrin 산장 후보를 먼저 지납니다.",
        coords: [[46.558123, 11.664884], [46.5539, 11.6531]]
      },
      {
        title: "Contrin → Hotel Icaro",
        mode: "trail",
        meta: "트레킹 · 내부 루프",
        note: "참고 지도에서 고원 안쪽으로 들어가는 중간 산장/호텔 구간입니다.",
        coords: [[46.5539, 11.6531], [46.5455, 11.6621]]
      },
      {
        title: "Hotel Icaro → Malga Schgaguler",
        mode: "trail",
        meta: "트레킹 · 북동쪽 분기",
        note: "조망 산장 방향으로 살짝 돌아 루프의 입체감을 만듭니다.",
        coords: [[46.5455, 11.6621], [46.5525, 11.6767]]
      },
      {
        title: "Schgaguler → Baita Sanon",
        mode: "trail",
        meta: "트레킹 · 산장 연결",
        note: "Schgaguler에서 Sanon으로 이어지는 산장 연결 구간입니다.",
        coords: [[46.5525, 11.6767], [46.547882, 11.65495]]
      },
      {
        title: "Sanon → Hotel Ritsch",
        mode: "trail",
        meta: "트레킹 · 고원 중심",
        note: "넓은 목초지와 완만한 길을 지나 Hotel Ritsch 방향으로 갑니다.",
        coords: [[46.547882, 11.65495], [46.5427, 11.6492], [46.539398, 11.6452]]
      },
      {
        title: "Hotel Ritsch → Saltria",
        mode: "trail",
        meta: "트레킹 · 남쪽 루프",
        note: "고원 남쪽으로 크게 돌아 루프의 원거리 지점을 찍습니다.",
        coords: [[46.539398, 11.6452], [46.5339, 11.6507], [46.5307, 11.6609]]
      },
      {
        title: "Saltria → Malga Rauch",
        mode: "trail",
        meta: "트레킹 · 복귀 시작",
        note: "Saltria에서 다시 고원 안쪽으로 올라오는 복귀 초반 구간입니다.",
        coords: [[46.5307, 11.6609], [46.5412, 11.6695]]
      },
      {
        title: "Malga Rauch → Mont Seuc",
        mode: "trail",
        meta: "트레킹 · 루프 완료",
        note: "Rauch를 지나 출발점인 Mont Seuc 방향으로 복귀합니다.",
        coords: [[46.5412, 11.6695], [46.5485, 11.675], [46.558123, 11.664884]]
      },
      {
        title: "Florian 리프트 왕복",
        mode: "lift",
        meta: "리프트 · 선택 왕복",
        note: "Florian 리프트 왕복을 별도 레이어로 표시해 선택 구간처럼 볼 수 있습니다.",
        coords: [[46.5307, 11.6609], [46.5318, 11.6777], [46.5307, 11.6609]]
      }
    ]
  },
  {
    id: "cinque-torri",
    day: "Day 5",
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
    day: "Day 6",
    title: "트레치메 디 라바레도",
    backgroundImage: "assets/06-tre-cime-map.jpg",
    summary: "Auronzo 산장에서 Lavaredo, Locatelli, 동굴 포토존, Langalm 방향을 지나 101·105 코스로 순환합니다.",
    center: [46.6256, 12.3032],
    zoom: 13,
    weather: { name: "Rifugio Locatelli", coords: [46.636902, 12.31056] },
    poiImage: "assets/tre-cime-poi.jpg",
    trackFile: "assets/tracks/day-06-tre-cime.gpx",
    trackSource: "Trecime Trek · Tre Cime di Lavaredo circuit",
    trackPlayback: true,
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
let isPlaying = false;
let playTimer = null;
let segmentProgress = 0;
let map;
let tileLayer;
let drawnLayers = [];
let poiMarkers = [];
let movingMarker;
let importedTracks = {};
let importedTrackLayer = null;
let importedPlayback = false;
let weatherRequestToken = 0;
let activeVariants = { marmolada: "a" };
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
const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const playLabel = document.querySelector("#playLabel");
const poiSection = document.querySelector("#poiSection");
const poiImage = document.querySelector("#poiImage");
const poiList = document.querySelector("#poiList");
const poiToggleButton = document.querySelector("#poiToggleButton");
const mapCurrentStep = document.querySelector("#mapCurrentStep");
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
  movingMarker = L.marker([0, 0], {
    icon: L.divIcon({
      className: "",
      html: `
        <div class="moving-pin" role="img" aria-label="가이드 순찬">
          <span class="vehicle-back" aria-hidden="true"></span>
          <span class="guide-face" aria-hidden="true"></span>
          <svg class="vehicle-art cable-car-art" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M3 5H61" />
            <path d="M32 5V16" />
            <path d="M25 16H39" />
            <rect x="8" y="18" width="48" height="39" rx="11" />
            <path d="M11 45H53" />
          </svg>
        </div>
      `,
      iconSize: [64, 64],
      iconAnchor: [32, 32]
    }),
    interactive: false,
    opacity: 0,
    zIndexOffset: 1000
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
      setMarkerToStepStart();
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
      stopPlayback();
      activeVariants[route.id] = variant.id;
      activeStepIndex = 0;
      segmentProgress = 0;
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
  stopPlayback();
  activeRouteIndex = index;
  activeStepIndex = 0;
  activeLayer = "all";
  segmentProgress = 0;
  renderRoute();
}

function renderRoute() {
  const route = routeData[activeRouteIndex];
  const visibleSteps = getVisibleSteps(route);
  appShell.style.setProperty("--route-background", `url("${route.backgroundImage}")`);
  routeEyebrow.textContent = `${route.day} · ${visibleSteps.length}개 구간`;
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
  setMarkerToStepStart();
}

function renderSummary(route) {
  const steps = getVisibleSteps(route).map(({ step }) => step);
  const trailKm = steps
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

function renderMap() {
  clearMap();
  const route = routeData[activeRouteIndex];
  const importedTrack = getVisibleImportedTrack(route);
  const visibleSteps = getVisibleSteps(route);
  const boundsPoints = [];
  const trackStepSegments = buildTrackStepSegments(importedTrack, visibleSteps);
  let activeLine = null;

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
    if (isActive) activeLine = line;
  });

  activeLine?.bringToFront();

  getMapPoiIndices(route).forEach((poiIndex, displayIndex) => {
    const [name, description, coord] = route.pois[poiIndex];
    const mode = pointModeForIndex(route, poiIndex);
    const marker = L.marker(coord, {
      icon: L.divIcon({
        className: "route-marker-hit",
        html: `<div class="route-pin ${mode}">${displayIndex + 1}</div>`,
        iconSize: [44, 44],
        iconAnchor: [22, 22]
      })
    }).bindPopup(`<strong>${name}</strong><span>${description}</span>`).addTo(map);
    poiMarkers.push(marker);
    boundsPoints.push(coord);
  });

  const bounds = L.latLngBounds(boundsPoints);
  map.fitBounds(bounds, { padding: [28, 28], maxZoom: route.zoom });
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
  stopPlayback();
  activeStepIndex = index;
  segmentProgress = 0;
  renderMap();
  renderSteps();
  updateCurrentStep();
  setMarkerToStepStart();
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
    const [name, description] = route.pois[poiIndex];
    const item = document.createElement("div");
    item.className = "poi-item";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.hidden = !isExpanded && displayIndex >= 6;
    item.innerHTML = `<strong>${displayIndex + 1}. ${name}</strong><span>${description}</span>`;
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
  mapCurrentStep.dataset.mode = step.mode;
  mapCurrentStep.innerHTML = `
    <span>${stepLabel}</span>
    <strong>${step.title}</strong>
    <small>${stepMetric}</small>
  `;
}

function setMarkerToStepStart() {
  movingMarker.setOpacity(isPlaying ? 1 : 0);
  const importedTrack = getVisibleImportedTrack(routeData[activeRouteIndex]);
  if (importedTrack?.coords.length && importedPlayback) {
    movingMarker.setLatLng(importedTrack.coords[0]);
    return;
  }
  const point = getActiveStep().coords[0];
  movingMarker.setLatLng(point);
}

function updateMarker() {
  movingMarker.setOpacity(1);
  const route = routeData[activeRouteIndex];
  const importedTrack = getVisibleImportedTrack(route);
  if (importedTrack?.coords.length && importedPlayback) {
    const position = interpolateCoords(importedTrack.coords, segmentProgress);
    movingMarker.setLatLng(position);
    updateMovingMarkerMode(getClosestStepMode(route, position));
    return;
  }

  const step = getActiveStep();
  movingMarker.setLatLng(interpolateCoords(step.coords, segmentProgress));
  updateMovingMarkerMode(step.mode);
}

function updateMovingMarkerMode(mode) {
  const marker = movingMarker.getElement()?.querySelector(".moving-pin");
  if (!marker) return;
  marker.classList.toggle("cable-mode", mode === "cable");
  marker.classList.toggle("lift-mode", mode === "lift");
  const rideLabel = mode === "lift" ? "리프트" : mode === "cable" ? "케이블카" : null;
  marker.setAttribute("aria-label", rideLabel ? `${rideLabel}를 타는 가이드 순찬` : "이동 중인 가이드 순찬");
}

function getClosestStepMode(route, position) {
  const steps = getVisibleSteps(route).filter(({ step }) => !step.mapHidden);
  let closestMode = steps[0]?.step.mode || "trail";
  let closestDistance = Number.POSITIVE_INFINITY;

  steps.forEach(({ step }) => {
    const stepDistance = distanceToPath(position, step.coords);
    if (stepDistance < closestDistance) {
      closestDistance = stepDistance;
      closestMode = step.mode;
    }
  });
  return closestMode;
}

function distanceToPath(point, coords) {
  if (coords.length < 2) return distance(point, coords[0]);
  let closestDistance = Number.POSITIVE_INFINITY;

  for (let index = 0; index < coords.length - 1; index += 1) {
    const start = [coords[index][1] * 74, coords[index][0] * 111];
    const end = [coords[index + 1][1] * 74, coords[index + 1][0] * 111];
    const target = [point[1] * 74, point[0] * 111];
    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    const lengthSquared = dx * dx + dy * dy;
    const ratio = lengthSquared === 0
      ? 0
      : Math.max(0, Math.min(1, ((target[0] - start[0]) * dx + (target[1] - start[1]) * dy) / lengthSquared));
    const projected = [start[0] + dx * ratio, start[1] + dy * ratio];
    closestDistance = Math.min(closestDistance, Math.hypot(target[0] - projected[0], target[1] - projected[1]));
  }
  return closestDistance;
}

function interpolateCoords(coords, progress) {
  if (coords.length === 1) return coords[0];

  const segments = [];
  let totalLength = 0;
  for (let i = 0; i < coords.length - 1; i += 1) {
    const length = distance(coords[i], coords[i + 1]);
    segments.push(length);
    totalLength += length;
  }

  let target = totalLength * progress;
  for (let i = 0; i < segments.length; i += 1) {
    if (target <= segments[i]) {
      const ratio = segments[i] === 0 ? 0 : target / segments[i];
      return [
        coords[i][0] + (coords[i + 1][0] - coords[i][0]) * ratio,
        coords[i][1] + (coords[i + 1][1] - coords[i][1]) * ratio
      ];
    }
    target -= segments[i];
  }

  return coords[coords.length - 1];
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

function startPlayback() {
  stopPlayback(false);
  const route = routeData[activeRouteIndex];
  const playbackStepIndices = getVisibleSteps(route)
    .map(({ step }, index) => ({ step, index }))
    .filter(({ step }) => !step.mapHidden)
    .map(({ index }) => index);
  let playbackPosition = 0;
  isPlaying = true;
  activeStepIndex = playbackStepIndices[0] ?? 0;
  segmentProgress = 0;
  importedPlayback = Boolean(route.trackPlayback && getVisibleImportedTrack(route)?.coords.length);
  playIcon.textContent = "■";
  playLabel.textContent = "정지";
  playButton.setAttribute("aria-label", "코스 재생 정지");
  renderMap();
  renderSteps();
  updateCurrentStep();
  updateMarker();

  playTimer = window.setInterval(() => {
    segmentProgress += importedPlayback ? 0.006 : 0.014;

    if (importedPlayback) {
      if (segmentProgress >= 1) {
        segmentProgress = 1;
        updateMarker();
        stopPlayback();
        return;
      }
      updateMarker();
      return;
    }

    if (segmentProgress >= 1) {
      segmentProgress = 0;
      playbackPosition += 1;

      if (playbackPosition >= playbackStepIndices.length) {
        activeStepIndex = playbackStepIndices.at(-1) ?? 0;
        segmentProgress = 1;
        renderMap();
        renderSteps();
        updateCurrentStep();
        updateMarker();
        stopPlayback();
        return;
      }

      activeStepIndex = playbackStepIndices[playbackPosition];

      renderMap();
      renderSteps();
      updateCurrentStep();
    }

    updateMarker();
  }, 28);
}

function stopPlayback(resetButton = true) {
  if (playTimer) {
    window.clearInterval(playTimer);
    playTimer = null;
  }
  isPlaying = false;
  importedPlayback = false;
  movingMarker.setOpacity(0);

  if (resetButton) {
    playIcon.textContent = "▶";
    playLabel.textContent = "코스 재생";
    playButton.setAttribute("aria-label", "코스 재생");
  }
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
  const notes = [];
  if (rainChance >= 50 || [61, 63, 65, 80, 81, 82, 95, 96, 99].includes(code)) {
    notes.push("방수 자켓");
  }
  if (windGust >= 35) {
    notes.push("바람막이");
  }
  if (low <= 8) {
    notes.push("보온 레이어");
  }
  if ([45, 48].includes(code)) {
    notes.push("시야 저하 주의");
  }
  if (!notes.length) return "기본 트레킹 복장으로 충분하지만 능선 바람은 현장에서 다시 확인하세요.";
  return `${notes.join(" · ")} 준비를 권장합니다.`;
}

function formatNumber(value, digits = 0) {
  if (!Number.isFinite(value)) return "--";
  return value.toFixed(digits);
}

async function loadBuiltInTracks() {
  const routesWithTracks = routeData.filter(route => route.trackFile);

  await Promise.all(routesWithTracks.map(async route => {
    try {
      const embeddedTrack = getEmbeddedTrack(route.id);
      let loadedTrack;

      if (embeddedTrack) {
        loadedTrack = embeddedTrack;
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
  setMarkerToStepStart();
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

playButton.addEventListener("click", () => {
  if (isPlaying) {
    stopPlayback();
    renderMap();
    renderSteps();
    return;
  }
  startPlayback();
});

mapCurrentStep.addEventListener("click", () => {
  document.querySelector(".current-panel").scrollIntoView({ behavior: "smooth", block: "center" });
});

poiToggleButton.addEventListener("click", () => {
  const routeId = routeData[activeRouteIndex].id;
  if (expandedPoiRoutes.has(routeId)) {
    expandedPoiRoutes.delete(routeId);
  } else {
    expandedPoiRoutes.add(routeId);
  }
  renderPois();
});

initMap();
buildTabs(routeTabs);
buildTabs(mobileRouteTabs);
buildFilters();
renderFilters();
renderRoute();
loadBuiltInTracks();
