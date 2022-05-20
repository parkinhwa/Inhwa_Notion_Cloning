# Inhwa_Notion_Cloning
<!-- [:point_right: Inhwa Notion 보러가기](https://inhwa-notion-cloning.vercel.app/) -->

![](https://velog.velcdn.com/images/parkinhwa/post/09f123a0-f6c7-4e01-ba48-58003e0198ae/image.gif)

## 컴포넌트 구조
![image](https://user-images.githubusercontent.com/65644486/169476759-ca3c7bda-5812-484b-808b-6d4b8f21caa8.png)

```
Inhwa_Notion_Cloning
├─ css
│  └─ Notion.css
├─ img
│  └─ notion.png
├─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ api.js
│  │  └─ document.js
│  ├─ App.js
│  ├─ component
│  │  ├─ Editor
│  │  │  └─ Editor.js
│  │  ├─ Page
│  │  │  ├─ ErrorPage.js
│  │  │  ├─ MainPage.js
│  │  │  ├─ NotionEditPage.js
│  │  │  └─ NotionPage.js
│  │  └─ Sidebar
│  │     ├─ NotionList.js
│  │     └─ NotionListHeader.js
│  ├─ main.js
│  └─ util
│     ├─ router.js
│     └─ storage.js
└─ vercel.json

```
#### App
- `App.js` - Page(NotionPage, NotionEditPage, MainPage, ErrorPage) 가져옴, 라우처 처리

#### Api
- `api.js` - API
- `document.js` - API 메소드 

#### Component
- `MainPage.js` - 메인 페이지
- `ErrorPage.js` - 404 에러 페이지
- `NotionPage.js` - 리스트 클릭, 추가, 삭제, 하위페이지 추가 기능
- `NotionListHeader.js` - 리스트 헤더
- `NotionList.js` - 리스트 생성
- `NotionEditPage.js` - Editor 수정, 입력 기능
- `Editor.js` - Editor 생성 

#### Util
- `router.js` - router
- `storage.js` - storage 관련 함수

## 회고
[:point_right: 프로젝트 회고 보러가기](https://velog.io/@parkinhwa/%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4-2%EA%B8%B0-5%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0)
