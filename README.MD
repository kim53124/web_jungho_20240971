# HTML 프로젝트 - 깃허브

새로운 시작 웹 서비스 개발의 세계로 떠나보아요

## Getting Started

This project is a starting point for a Web application.

-[프로젝트 메인 주소](https://kim53124.github.io/web_jungho_20240971/)



2주차: 개발 환경 준비 및 HTML 기초

기술 트렌드: AI의 발전과 활용 (머신러닝, 딥러닝, 자연어 처리, 이미지 인식), 생성형 AI (언어, 이미지/영상 합성), GitHub Copilot과 같은 AI 개발 도구 활용.
HTML 기초: 웹 페이지의 기본 구조 학습. <img>, <h3> 태그를 이용한 이미지 삽입 및 헤드라인 설정. <body>, <div>, <h3> 태그의 스타일 속성을 활용한 기본적인 화면 구성. KO, UTF-8 문자셋 설정.
3주차: 메타데이터와 하이퍼링크

기술 트렌드: 프레임워크와 라이브러리(React, Vue, Angular, React Bootstrap)의 개념과 차이점, UI 프레임워크 시장 동향.
Bootstrap 적용: 반응형 웹 디자인을 위한 Bootstrap 프레임워크 활용. container, row, col 클래스를 이용한 레이아웃 구성. 내비게이션 바(Navigation Bar) 및 드롭다운 메뉴 구현.
GitHub README.MD: GitHub 프로젝트 설명을 위한 README.MD 파일의 중요성 및 작성 방법.
4주차: 자바스크립트 기초 - 1

기술 트렌드: 자바스크립트의 역할 (동적 웹 페이지 구현), ECMAScript (ES5, ES6+) 표준화 과정, 크로스 브라우징 문제와 jQuery의 등장.
JavaScript 실행 순서: DOMContentLoaded와 window.onload 이벤트 이해. <script> 태그의 위치 (하단 또는 defer 속성)에 따른 DOM 접근 문제 해결 방안.
GitHub README.MD 업데이트: 주차별 완료된 학습 내용을 README.MD에 기록하여 프로젝트 진행 상황을 관리.
5주차: 자바스크립트 기초 - 2

모던 자바스크립트 (ES6+): let, const와 같은 ES6+ 문법의 이해 및 활용.
JavaScript 함수 및 이벤트: 실시간 시계 (show_clock 함수) 구현. 이미지 호버 효과를 통한 동적인 웹 페이지 요소 구현.
팝업창 구현: 새로운 팝업창 (popup.html) 생성 및 Bootstrap 스타일 적용. 팝업창 내에서 날짜 및 시간 표시.
6주차: FORM을 통한 데이터 전송

통신 프로토콜과 보안: HTTP (웹 표준 통신 프로토콜, 보안 취약점)와 HTTPS (TLS/SSL 적용, 암호화 통신, 보안 서버 구축)의 차이점 및 중요성. SSL 인증서 (Let's Encrypt 등)의 역할.
로그인 폼 구현: 사용자 ID와 비밀번호를 입력받는 로그인 폼 (login.html) 생성.
로그인/로그아웃 기능: 로그인 성공 후 페이지 (index_login.html)로 이동하고, 로그아웃 버튼을 통해 로그아웃 (logout.html) 처리. 기본적인 입력값 유효성 검사 (공백 체크).
9주차: 입력 필터링 및 데이터 저장

데이터 저장 - 쿠키: 웹 브라우저에 데이터를 저장하는 쿠키의 개념 및 활용. 쿠키 생성 (document.cookie), 만료 시간, 경로 설정.
쿠키 보안: SameSite 속성 (SameSite=None; Secure)을 이용한 크로스 사이트 스크립팅 (XSS) 취약점 완화 및 보안 강화.
쿠키 관리: 웹 브라우저 설정을 통한 쿠키 삭제 방법.
10주차: 쿠키와 세션

웹 보안과 세션: 클라이언트 측 저장 방식인 쿠키와 서버 측 저장 방식인 세션의 보안적 차이점. 중요한 데이터는 세션으로 저장하는 것의 중요성.
세션 구현 (로그인): sessionStorage를 활용한 JavaScript 세션 관리 (session_set, session_check, session_del 함수). 로그인 상태 유지 및 중복 로그인 방지.
로그인 유지 기능: 세션 ID를 쿠키에 저장하여 "로그인 유지" 기능 구현의 기본 개념.
11주차: 암호화와 보안 토큰

웹 보안 - 암호화 & 보안 토큰: 웹 통신에서의 암호화와 보안 토큰의 필요성.
ISO 7계층 모델 및 TCP/IP 프로토콜: 네트워크 계층 모델과 각 계층에서의 보안 관련 이슈.
안전한 인증 - JWT (JSON Web Tokens): JWT의 구조 (Header, Payload, Signature) 및 작동 방식. JWT 생성 (createJWT), 검증 (verifyJWT), 인증 상태 확인 (isAuthenticated, checkAuth) 함수 구현. localStorage에 토큰을 저장하는 방식의 보안적 이점.
12주차: 모듈화 및 클래스

JavaScript 클래스 (ES6): ES6부터 지원되는 클래스 문법을 활용한 객체 지향 프로그래밍 (OOP) 개념 학습 (캡슐화, 생성자, SET/GET 함수, 상속, 오버라이딩).
모듈화: import와 export를 사용하여 JavaScript 코드를 모듈화하는 방법. 코드 재사용성 및 유지보수성 향상.
회원 가입 기능 및 입력 필터링: 정규 표현식 (nameRegex, emailRegex, pwRegex)을 활용한 사용자 입력값 유효성 검사 (이름, 이메일, 비밀번호 등).
13주차: 웹 오픈 API

웹 오픈 API - 지도 서비스: Google Maps, Naver Map, KakaoMap 등 주요 지도 서비스의 활용 및 비즈니스 모델 (여행, 교통, 물류, 결제, 검색, 광고). AR, AI 기술과의 연계.