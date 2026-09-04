# Dolomiti Routebook Prototype

## 왜 이 작업을 시작했는가

돌로미티 패키지/가이드 여행 중 가이드가 카카오톡으로 당일 일정, 트레킹 루트, 산장, 음식 사진, 링크를 계속 공유했지만 정보가 대화방 안에 흩어져 다시 찾기 어려웠다. 그래서 여행자가 날짜별로 일정과 트레킹 코스, 지도, 산장/포인트, 날씨를 한 화면에서 확인할 수 있는 모바일 웹앱 프로토타입을 만들기 시작했다.

초기 목표는 카톡 공지 대체가 아니라, 실제 여행 중 바로 쓸 수 있는 `돌로미티 코스북`이다.

## 현재 프로젝트 위치

사용자 이름과 무관하게 홈 폴더 기준 상대 경로로 접근한다.

```bash
cd ~/Desktop/leo_workspace/dolomiti-prototype
```

## 실행 방법

가장 간단한 방법:

```bash
cd ~/Desktop/leo_workspace/dolomiti-prototype
python3 -m http.server 8017
```

브라우저에서 열기:

```text
http://localhost:8017/
```

`index.html`을 직접 열어도 기본 화면과 내장 트랙 데이터는 동작하지만, Leaflet/OpenStreetMap 타일과 Open-Meteo 날씨는 인터넷 연결이 필요하다. 개발 중에는 로컬 서버로 여는 것을 권장한다.

## 주요 파일

```text
index.html        화면 구조
styles.css        모바일/데스크톱 스타일
app.js            코스 데이터, 지도, GPX/KML, 날씨, 코스 선택 로직
tracks-data.js    GPX 좌표를 JS 배열로 내장한 fallback 데이터
scripts/          GPX에서 fallback 데이터를 다시 만드는 도구
assets/           지도 참고 이미지와 POI 이미지
assets/tracks/    원본 GPX/KML 파일 보관
```

## 현재 구현 상태

- 6일짜리 돌로미티 Routebook 프로토타입
- 390px 안팎의 휴대폰 화면을 기준으로 한 모바일 우선 레이아웃
- 모바일 날짜 탭 고정, 지도 하단 구간 선택 바텀시트, 가로 스크롤 필터 등 터치 중심 조작
- 모바일 정보 순서: 날짜/팀 선택 → 지도/구간 선택 → 현재 구간 → 요약 → 날씨 → 전체 구간
- Leaflet + OpenStreetMap 기반 실제 지도
- 날짜별 코스 탭
- 지도 위 POI 번호 마커
- 케이블카, 트레킹, 리프트, 차량 레이어 색상 구분
- 구간 카드 선택
- 지도 하단 이전/다음 및 전체 구간 선택
- 선택한 구간 자동 확대·중앙 정렬
- 날짜별 검증 GPX를 기본 트랙으로 자동 적용
- 내장 GPX 트랙 자동 로딩 및 `tracks-data.js` fallback
- 실제 GPX가 지나가는 구간은 이전 좌표 기반 직선을 숨기고, GPX에 없는 연결 구간만 색상선으로 표시
- Open-Meteo API 기반 산악 날씨 카드
- Day 2 A팀/B팀 코스 선택 버튼

## 내장 GPX/KML 상태

현재 내장된 실제 트랙:

```text
assets/tracks/day-01-rosengarten.gpx
assets/tracks/day-01-rosengarten.kml
assets/tracks/day-02-alba-viel-sass-pordoi.gpx
assets/tracks/day-05-cinque-torri-challenge.gpx
assets/tracks/day-06-tre-cime.gpx
```

`tracks-data.js`에는 일부 GPX 좌표를 내장해두었다. 파일 직접 열기 또는 fetch 실패 상황에서도 트랙이 보이게 하려는 fallback이다.

## Day별 현재 정리

### Day 1 로젠가르텐 & 카레짜

실제 사용자 확인 기준으로 다시 정리했다.

POI 흐름:

```text
1 Nova Levante
2 Malga Frommer
3 Kölner Hütte
4 Paolina
5 Carezza
6 Carezza/Karersee
```

구간:

```text
1→2 Nova Levante → Malga Frommer
2→3 Malga Frommer → Kölner Hütte
3→4 Kölner Hütte → Paolina
4→5 Paolina → Carezza
5→6 Carezza → Carezza/Karersee
```

중요한 사용자 피드백:

- 중식은 표시상 3번인 `Kölner Hütte`에서 먹는다.
- `1→2`는 케이블카 이동이고, `Malga Frommer`에서 곤돌라로 환승한다.
- `5번 Carezza/Karersee`는 카레짜 마을이 아니라 호수 위치여야 해서 좌표를 `46.40934, 11.57515`로 수정했다.

### Day 2 마르몰라다 & 사쓰 포르도이

단일 코스가 아니라 A/B 팀 분기 구조다.

공통:

```text
숙소 → Alba → Col dei Rossi → Rifugio Fredarola
```

A팀 가벼운 코스:

```text
Fredarola → Passo Pordoi → Funivia Sass Pordoi 하부역
```

B팀 트레킹 코스:

```text
Fredarola → Rifugio Viel dal Pan → 같은 길로 Fredarola 복귀 → Passo Pordoi
```

합류 후 전원:

```text
Passo Pordoi → Sass Pordoi 전망대 → 자유시간/관광
Sass Pordoi → Passo Pordoi 복귀
Passo Pordoi → QC Terme Dolomiti → 온천 → 숙소
```

현재 UI:

- `A팀 가벼운 코스`
- `B팀 트레킹 코스`

두 버튼이 있고, 선택한 팀에 맞는 구간 카드와 지도선만 표시된다.

팀별 지도 순번:

```text
A팀: 1 Alba → 2 Col dei Rossi → 3 Fredarola → 4 Passo Pordoi → 5 Sass Pordoi
B팀: 1 Alba → 2 Col dei Rossi → 3 Fredarola → 4 Viel dal Pan
     → 3 Fredarola → 5 Passo Pordoi → 6 Sass Pordoi
```

Outdooractive에서 직접 제작한 내장 GPX는 A/B팀의 공통·분기·재합류 흐름을 한 트랙에 담고 있다.

```text
Alba → Col dei Rossi → Fredarola
→ Viel dal Pan 왕복(B팀만)
→ Fredarola → Passo Pordoi 하부역 → Sass Pordoi 전망대
```

- 원본은 총 434개 트랙 포인트, 약 9.74km
- GPX 첫 구간은 Alba에서 Col dei Rossi까지의 케이블카 직선 이동
- 숙소에서 Alba까지의 버스 이동은 일정에 포함하지만 트레킹 지도에는 표시하지 않음
- A팀 선택 시 Viel dal Pan 왕복을 제외한 163포인트 경로 표시
- B팀 선택 시 Viel dal Pan 왕복을 포함한 434포인트 전체 경로 표시
- 두 팀 모두 Passo Pordoi 하부역에서 Sass Pordoi 전망대를 케이블카로 왕복
- 하부역 앞 주차장에서 단체 버스를 타고 QC Terme와 숙소로 이동
- QC Terme와 숙소는 구간 카드 설명에는 유지하지만 트레킹 지도 선과 마커에서는 제외

### Day 3 세체다

사용자가 공유한 두 GPX를 쉬운 복귀 코스와 도전 복귀 코스로 연결했다. 두 코스 모두 숙소에서 Ortisei로 이동한 뒤 케이블카로 Seceda 상부역에 올라 같은 길을 걷고, Pieralongia를 둘러본 뒤 Baita Troier에서 갈라진다.

```text
공통: Ortisei → Seceda 상부역 → Seceda Cross → Baita Troier
     → Malga Pieralongia → Baita Troier
쉬운 복귀: 직진 갈림길 → Seceda 상부역
도전 복귀: Baita Daniel → Baita Mastle → Baita Sofie → Seceda 상부역
공통: 케이블카로 Ortisei 하산 → 숙소
```

- `day-03-seceda-easy.gpx`: 580개 트랙 포인트, 트레킹 약 5.3km
- `day-03-seceda-challenge.gpx`: 612개 트랙 포인트, 트레킹 약 5.6km
- 숙소와 Ortisei 사이의 버스 이동은 일정에 포함하지만 트레킹 지도에는 표시하지 않음
- 코스 선택 시 POI 순서, 구간 카드, 트랙 선과 트레킹 거리가 함께 변경됨


### Day 4 알페 디 시우시

사용자가 공유한 두 GPX를 쉬운 코스와 도전 코스로 연결했다. 두 코스 모두 Mont Sëuc에서 Florian까지 걸어 Wild O’Williams 산장을 왕복한 뒤 Saltria 부근에서 갈라진다.

```text
숙소 → Ortisei → Mont Sëuc 상부역
→ Wiedner Egg 갈림길 → Florian → Wild O’Williams 왕복
쉬운 코스: Saltria에서 11번 버스 → Ritsch 정류소
          → Sanon 방향 갈림길 → Hotel Sanon → Sporthotel Sonne
도전 코스: Saltria와 Brunelle 사이 고원길 → Sporthotel Sonne
공통: Sonne 리프트 → Mont Sëuc 상부역 → Ortisei → 숙소
```

- `day-04-alpe-siusi.gpx`: 쉬운 코스 976개 트랙 포인트, 트레킹 약 8.6km
- `day-04-alpe-siusi-hard.gpx`: 도전 코스 723개 트랙 포인트, 트레킹 약 8.9km
- H → S 구간은 11번 버스 이동으로 표시하며 I~R 경유 좌표도 GPX 선에 포함
- 숙소와 Ortisei 사이의 버스 이동은 일정에 포함하지만 지도에는 표시하지 않음
- E와 T 갈림길, 주요 승강장과 버스 정류소 사진을 POI에 연결

### Day 5 친퀘토리

차량 이동, 리프트, 친퀘토리 루프, Averau/Nuvolau, Cortina/Braies 후속 이동까지 들어가 있다.

내장 GPX:

```text
day-05-scoiattoli-averau.gpx
```

이 GPX는 전체 Day 5가 아니라 `Scoiattoli → Averau` 일부 구간이다.

### Day 6 트레치메

Tre Cime 전체 루프 GPX가 들어가 있다.

주요 구간:

```text
주차장 → Auronzo
Auronzo → 예배당
예배당 → Lavaredo
Lavaredo → Forcella Lavaredo
Forcella → Locatelli
Locatelli → Laghi dei Piani
Locatelli → 동굴 포토존
동굴 포토존 → Langalm
Langalm → Auronzo
```

내장 GPX:

```text
day-06-tre-cime.gpx
```

## 날씨 기능

Open-Meteo API를 사용한다.

## 모바일 데이터 최적화

- POI 사진은 모바일 화면 기준 최대 1200px JPEG로 제공한다.
- 음식 확대 사진은 최대 1600px JPEG로 제공한다.
- POI와 음식 사진은 `loading="lazy"`로 실제로 화면에 필요할 때 내려받는다.
- 원본 사진을 추가할 때는 앱에서 직접 참조하기 전에 같은 기준으로 리사이즈·압축한다.

## PWA와 오프라인 지도

- 우측 상단 `홈 화면` 버튼으로 앱 설치를 시작한다. iPhone/iPad에서는 Safari의 공유 메뉴에서 `홈 화면에 추가`를 선택하도록 안내한다.
- 지도 우측 상단 `오프라인 저장` 버튼은 현재 코스 주변 OpenTopoMap 타일을 줌 11~15까지 저장한다.
- 평소 화면에 표시했던 OpenTopoMap 타일도 서비스 워커가 자동으로 캐시한다.
- 앱 화면, 내장 트랙, Leaflet 지도 엔진은 로컬 캐시에 포함되며 사진은 방문 시점에 필요한 파일만 캐시한다.
- 서비스 워커와 설치 기능은 HTTPS 배포 환경 또는 `localhost`에서 동작한다.
- OpenTopoMap 서버 부담을 줄이기 위해 코스 밖의 넓은 지역이나 줌 16 이상은 일괄 저장하지 않는다.

## PMTiles 지도 샘플

`map-sample.html`은 2일차 로젠가르텐 코스만 분리한 MapLibre 비교 샘플이다.

- 로젠가르텐 주변 OSM 벡터 지도: 약 3.0MB
- 같은 범위의 Mapterhorn 고도 지도(줌 0~15): 약 33MB
- 지도 최대 확대를 지형 원본 해상도인 줌 15로 제한해 픽셀 확대 방지
- `입체 지형`과 `빠른 지도` 전환
- 코스 선과 1~6번 POI 마커 표시

PMTiles는 HTTP Range 요청이 필요하므로 Python 기본 서버 대신 아래 명령으로 확인한다.

```bash
npx --yes http-server . -p 8018 -c-1
```

브라우저에서 `http://localhost:8018/map-sample.html`을 연다.

각 Day의 대표 지점:

```text
Day 1 쾰너 산장
Day 2 Rifugio Viel dal Pan
Day 3 Seceda
Day 4 Mont Seuc
Day 5 Rifugio Scoiattoli
Day 6 Rifugio Locatelli
```

표시 항목:

- 현재 기온
- 체감 온도
- 최저/최고 기온
- 강수 확률/강수량
- 현재 바람
- 돌풍
- 준비물 조언

인터넷이 없으면 날씨 카드는 실패 메시지를 보여준다.

## 주의할 점

- 현재 지도 바탕은 OpenStreetMap 기본 타일이다. 돌로미티 지역 특성상 이탈리아어, 독일어, 라딘어 지명이 섞여 보인다.
- `file://`로 직접 열면 외부 API/fetch 동작이 제한될 수 있다. 로컬 서버 실행을 권장한다.
- Day 2 GPX는 A/B팀 산악 코스를 모두 담지만 Sass Pordoi에서 하부역으로 내려오는 역방향 케이블카는 같은 선으로 표현한다. Day 5 GPX는 Scoiattoli에서 Averau까지의 일부 트랙이다.
- Day 3, Day 4는 아직 실제 GPX가 없어서 좌표 기반 연결 경로다.

## 다음에 할 일

우선순위 높은 작업:

1. Day 3 세체다 실제 GPX/KML 확보 및 적용
2. Day 4 알페 디 시우시 실제 GPX/KML 확보 및 적용
3. Day 2 A팀/B팀 UI를 더 명확하게 다듬기
   - A/B 선택 시 지도 범례나 카드 제목에 현재 선택팀을 더 잘 보이게 하기
   - A/B 선택 시 현재 팀과 Viel dal Pan 분기 여부를 더 명확히 표시
4. Day 5 전체 친퀘토리 루프 GPX 확보
5. 날씨 카드에 가이드 수동 메모 필드 추가
6. 각 Day에 예상 소요시간, 거리, 고도 차 추가
7. 실제 여행 중 야외 환경에서 글자 크기와 명암 대비 현장 테스트

## Codex CLI로 이어갈 때 첫 요청 예시

```text
이 README를 읽고 dolomiti-prototype 작업을 이어가자. 우선 현재 app.js 구조를 파악하고 Day 3 세체다 GPX 적용부터 진행해줘.
```

또는:

```text
이 README 기준으로 Day 2 A/B 코스 선택 UI를 더 보기 쉽게 다듬어줘.
```

## 최근 검증

마지막으로 확인한 명령:

```bash
node --check dolomiti-prototype/app.js
```

통과했다.

## 작업 체크포인트 · 2026-08-15

현재 페이지는 PC보다 휴대폰 사용을 우선하는 방향으로 전면 개편했다.

- 모바일 날짜 탭은 긴 코스명을 빼고 `Day 1`부터 `Day 6`까지만 표시한다.
- 날짜 탭은 스크롤 중에도 접근할 수 있도록 화면 상단에 고정한다.
- 모바일 지도 하단에서 이전/다음 구간을 선택하고 전체 구간 목록을 펼칠 수 있다.
- Day 2 A/B 팀 선택은 지도보다 먼저 보이도록 지도 위로 이동했다.
- 모바일 지도는 화면을 과도하게 차지하지 않도록 높이를 `340px~440px` 범위로 제한한다.
- 모바일 정보 순서는 `날짜/팀 선택 → 지도/구간 선택 → 현재 구간 → 요약 → 날씨 → 전체 구간`이다.
- 구간 필터는 가로 스크롤 방식이며 버튼과 구간 카드는 터치 조작에 맞게 키웠다.
- 데스크톱 전용 사이드바와 3단 카드 레이아웃은 `1024px` 이상에서만 적용한다.
- 실제 Chrome 모바일 뷰포트 `390×844`에서 Day 1과 Day 2 A/B 전환을 확인했다.
- `1440×900` 데스크톱 레이아웃과 `node --check app.js`도 정상임을 확인했다.

다음 작업은 이 상태를 기준으로 이어간다.
