# Dolomiti Prototype 작업 메모

마지막 갱신: 2026-09-04 (Asia/Seoul)

## 제품 방향

- 현재 앱의 OpenTopoMap 디자인을 유지한다.
- 자체 PMTiles + MapLibre 지도는 품질 비교용 샘플로만 보관한다.
- 산악 지역의 느린 로밍과 단절 상황에 대비해 PWA와 코스별 오프라인 타일 저장을 사용한다.
- 앱 설치·홈 화면 표시는 `sweeteuro` 브랜드를 사용한다.

## 구현된 기능

### 사진 최적화

- 음식 사진 7개를 최대 1600px JPEG로 압축했다.
- POI PNG 27개를 최대 1200px JPEG로 변환하고 `app.js` 참조를 변경했다.
- POI와 음식 이미지는 지연 로딩한다.
- 원본 PNG는 앱 자산에서 제거했다.

### PWA와 오프라인 지도

- `manifest.webmanifest`와 `sw.js`를 추가했다.
- 헤더 우측에 `홈 화면` 버튼을 추가했다.
- Android/Chromium은 설치 프롬프트를 사용한다.
- iPhone/iPad는 Safari의 `공유 → 홈 화면에 추가` 안내를 표시한다.
- 설치 이름과 iOS 홈 화면 이름은 `sweeteuro`다.
- SWEETEURO 로고 기반 192px·512px 앱 아이콘을 사용한다.
- Leaflet 1.9.4를 `assets/vendor/leaflet/`에 로컬로 포함했다.
- 지도 우측에 `오프라인 저장` 버튼을 추가했다.
- 현재 선택 코스 주변 OpenTopoMap 타일을 줌 11~15 범위로 저장한다.
- 일반 탐색 중 화면에 표시한 OpenTopoMap 타일도 자동 캐시한다.
- 로젠가르텐 코스의 저장 대상은 현재 152개 타일이다.
- 네트워크 차단 상태에서 앱 화면과 Leaflet 지도가 실행되는 것을 확인했다.

### 모바일 지도 레이아웃

- 코스 선택 영역이 표시되는 모바일 화면에서만 지도 높이를 줄인다.
- 해당 지도 높이는 `clamp(520px, calc(72svh - env(safe-area-inset-bottom)), 590px)`이다.
- 하단 코스 이동 박스가 첫 화면 아래로 잘리는 현상을 완화했다.
- 데스크톱과 코스 선택이 없는 날의 지도 높이는 유지한다.

### PMTiles 비교 샘플

- `map-sample.html`에 로젠가르텐 단일 코스 비교 화면이 있다.
- MapLibre, Protomaps 벡터 지도와 Mapterhorn 고도 PMTiles를 로컬로 포함한다.
- `입체 지형 / 빠른 지도` 토글이 있다.
- 고도 데이터는 줌 0~15, 약 33MB다.
- 실제 앱에는 적용하지 않고 비교 자료로 유지한다.

## 최근 커밋

- `20fdfc5` — Add offline PWA support and optimize media
- `ebcb28d` — Update SWEETEURO install branding
- `54be179` — Fit route controls within mobile viewport

위 커밋은 모두 `origin/main`에 푸시됐다.

## 로컬 실행

```bash
python3 -m http.server 8017
```

- 앱: `http://localhost:8017/`
- PMTiles 샘플은 HTTP Range 요청이 필요하므로 아래 명령을 사용한다.

```bash
npx --yes http-server . -p 8018 -c-1
```

- PMTiles 샘플: `http://localhost:8018/map-sample.html`

## 운영 시 주의사항

- PWA 설치와 서비스 워커는 HTTPS 또는 `localhost`에서만 동작한다.
- 설치 이름이나 아이콘 변경 후 기존 홈 화면 앱에는 OS 캐시가 남을 수 있다. 기존 앱을 삭제하고 새로 추가해 확인한다.
- OpenTopoMap 공용 서버에 부담을 주지 않도록 넓은 지역이나 줌 16 이상을 일괄 저장하지 않는다.
- 서비스 워커의 정적 캐시 이름은 현재 `dolomiti-static-v6`이다.

## Git에서 제외해 둔 로컬 파일

- `7dd46def57f80.png` — 사용자가 넣은 SWEETEURO 원본 로고
- `KakaoTalk_Photo_2026-09-04-22-07-35.png` — 모바일 잘림 확인용 캡처
- `assets/pwa-offline-preview.png` — PWA QA 캡처
- `photo/` — 원본 사진 폴더

이 파일들은 사용자가 별도로 요청하지 않는 한 커밋하지 않는다.
