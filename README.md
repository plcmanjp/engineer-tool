# 엔지니어 도구

PLC와 자동화 실무에서 자주 사용하는 계산과 변환을 브라우저에서 바로 처리할 수 있는 무료 도구 모음입니다.

## 바로 사용하기

**[엔지니어 도구 열기](https://plcmanjp.github.io/engineer-tool/)**

- 설치와 회원가입 없이 사용할 수 있습니다.
- 입력한 값은 서버로 전송하지 않고 현재 브라우저에서 계산합니다.
- PC, 태블릿과 스마트폰에서 사용할 수 있습니다.

## 제공 도구

| 도구 | 주요 기능 |
|---|---|
| [프로그래머 계산기](https://plcmanjp.github.io/engineer-tool/programmer-calculator/) | 진법 변환과 비트 연산 |
| [전자기어비 계산기](https://plcmanjp.github.io/engineer-tool/gear-ratio/) | 모터와 기구 조건에 맞는 전자기어비 계산 |
| [원둘레 계산기](https://plcmanjp.github.io/engineer-tool/circumference/) | 지름, 원주와 이동량 계산 |
| [삼각함수 계산기](https://plcmanjp.github.io/engineer-tool/trigonometry/) | 직각삼각형의 변과 각도 계산 |
| [ASCII 코드표와 입력기](https://plcmanjp.github.io/engineer-tool/ascii/) | ASCII 문자와 코드 확인 |
| [아날로그 스케일 변환](https://plcmanjp.github.io/engineer-tool/analog-scale/) | 원시값과 공학 단위 변환 |
| [통신 코드 계산기](https://plcmanjp.github.io/engineer-tool/comm-code/) | LRC, BCC와 체크섬 계산 |
| [시리얼 통신 속도 계산기](https://plcmanjp.github.io/engineer-tool/serial-time/) | 프레임 전송 시간과 처리량 계산 |
| [UVW 스테이지 계산기](https://plcmanjp.github.io/engineer-tool/uvw-stage/) | UVW 스테이지 좌표와 모터 이동량 계산 |
| [Modbus RTU 프레임 생성기](https://plcmanjp.github.io/engineer-tool/modbus-rtu/) | 8개 기능 코드의 요청 프레임과 CRC 계산 |
| [인버터 컨베이어 속도](https://plcmanjp.github.io/engineer-tool/inverter-conveyor/) | 주파수와 이송속도 양방향 계산 |
| [서보 이동시간](https://plcmanjp.github.io/engineer-tool/servo-move-time/) | 최고속도 기준 가감속 시간과 프로파일 재생 |
| [서보 이상코드 검색](https://plcmanjp.github.io/engineer-tool/servo-alarm/) | 5기종 오류/경고/상세코드 2349항목과 조치사항 |
| [서보 버퍼 주소 계산](https://plcmanjp.github.io/engineer-tool/servo-buffer/) | 8기종 버퍼 2696정의의 검색과 주소 계산 |

수치/기하, 서보/모션, 통신/코드 카테고리로 14개 페이지를 선택합니다. 앱의 ASCII 코드표와 입력기는 웹 한 페이지에 함께 제공합니다.

## 문제 제보

계산 결과나 화면 동작에 문제가 있다면 [GitHub Issues](https://github.com/plcmanjp/engineer-tool/issues)에 사용한 도구, 입력값과 기대한 결과를 적어 제보해 주세요.

## 저장소 안내

이 저장소는 엔지니어 도구의 공개 소스와 GitHub Pages 배포 파일을 보유합니다.

## 계산 라이브러리

십진 계산은 [decimal.js 10.6.0](https://github.com/MikeMcl/decimal.js/tree/v10.6.0)의 로컬 사본을 사용합니다. MIT 라이선스는 assets/vendor/decimal-LICENCE.md에 있습니다. 런타임 CDN 요청은 없습니다.
