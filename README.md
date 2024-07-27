# Poorm IDE: 코딩테스트를 위한 WEB IDE
## ⭐️ 프로젝트 개요
![preview](https://github.com/GoormFriends/IDE-frontend/assets/100774811/fc70da74-653e-45f7-93d7-d450b7d6ccc0)

> 코딩테스트 문제 풀이와 코드리뷰를 할 수 있는 Web 기반 IDE<br>2023.12.01 ~ 2023.12.28(4주)

<br>

## 💡 주요 기능
### IDE
- 컴파일 기능 (문제를 풀고 나면, 컴파일 에러, 오답, 정답 등 표시)
- 문제 정답일 경우, 콘페티로 표시

| IDE 페이지 |
| -- |
| <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/2ba3db42-abf1-4f26-a6a2-eb1346b2ed07" alt="IDE 페이지"/> |


### 문제집(마이리스트) 및 문제 목록
- 마이리스트(문제집)을 만들고 문제를 추가, 삭제 가능
- 문제 목록 필터 기능 (정답 유무, 레벨 별)
- 문제 목록 검색 기능

| 마이리스트 |
| -- |
| <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/843d6661-4d5a-4dff-a192-a6ad6f655b38" alt="마이리스트" /> |

| 문제 목록 페이지 - 검색, 필터 기능 | 문제 목록 페이지 - 마이리스트 담기 모달 |
| -- | -- |
| <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/1c89c31e-91c4-4983-834d-8c4201e30cdf" alt="문제 목록 검색 기능" /> | <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/7d10cc1b-cc67-46f3-ba68-e26b9b9a21d6" alt="문제 목록에서 마이리스트 수정 기능" /> |


### 채팅
- 채팅 속 마크다운 형식 지원
- SNS 형식의 채팅 UI

| 채팅 | 
| -- | 
| <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/7e232172-5e70-4f89-bbad-bad6537adbfe" alt="채팅 기능" /> |

### 기타 기능

- 소셜 로그인 (kakao, github) 지원
- 마이페이지에서 마이리스트 확인 
- 문제 클릭 시 이동

| 로그인 페이지 | 마이페이지 |
| -- | -- |
| <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/eefff8fc-2ee2-4012-84c0-79ca68e21eba" alt="로그인 페이지" /> | <img src="https://github.com/GoormFriends/IDE-frontend/assets/100774811/5d05e935-5c57-4676-93d3-a318c9c7b5fe" alt="마이페이지" /> |


<br>

## ⚙️ 개발 환경 및 기술 스택
### 시스템 아키텍처
![기술 아키텍쳐](https://github.com/GoormFriends/IDE-frontend/assets/100774811/690ee2fe-e3b4-42e2-a438-54b6edbc2e19)

- react
- axios
- react-query
- react-router-dom
- monaco-editor
- Material-UI
- tiptap
- stompjs



### ERD
![ERD](https://github.com/GoormFriends/IDE-frontend/assets/100774811/f775be13-1e44-4690-bdbf-5b990834fc5c)

### 프로젝트 파일 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜MyListService.js
 ┃ ┗ 📜ProblemListsService.js
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┗ 📜title_logo.png
 ┣ 📂components
 ┃ ┣ 📂Ide
 ┃ ┃ ┣ 📜Confetti.jsx
 ┃ ┃ ┣ 📜InputOutput.jsx
 ┃ ┃ ┣ 📜InputOutput.module.css
 ┃ ┃ ┣ 📜MonacoEditor.jsx
 ┃ ┃ ┣ 📜ProblemContent.jsx
 ┃ ┃ ┗ 📜ProblemContent.module.css
 ┃ ┣ 📂chatModal
 ┃ ┃ ┣ 📜ChatModal.jsx
 ┃ ┃ ┣ 📜ChatModal.module.css
 ┃ ┃ ┣ 📜InputField.jsx
 ┃ ┃ ┣ 📜InputField.module.css
 ┃ ┃ ┣ 📜MessageContainer.jsx
 ┃ ┃ ┣ 📜MessageContainer.module.css
 ┃ ┃ ┗ 📜TipTap.css
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.module.css
 ┃ ┣ 📂miniMyList
 ┃ ┃ ┣ 📜MiniMyList.jsx
 ┃ ┃ ┗ 📜MiniMyList.module.css
 ┃ ┣ 📂myList
 ┃ ┃ ┣ 📜AddMyList.jsx
 ┃ ┃ ┣ 📜AddMyList.module.css
 ┃ ┃ ┣ 📜MyList.jsx
 ┃ ┃ ┣ 📜MyList.module.css
 ┃ ┃ ┣ 📜MyListContainer.jsx
 ┃ ┃ ┣ 📜MyListContainer.module.css
 ┃ ┃ ┣ 📜MyListProblem.jsx
 ┃ ┃ ┣ 📜MyListProblem.module.css
 ┃ ┃ ┗ 📜TestModal.jsx
 ┃ ┣ 📂myPageListBox
 ┃ ┃ ┣ 📜myPageListBox.jsx
 ┃ ┃ ┗ 📜myPageListBox.module.css
 ┃ ┗ 📂problemList
 ┃ ┃ ┣ 📜ProblemRow.jsx
 ┃ ┃ ┗ 📜ProblemRow.module.css
 ┣ 📂contexts
 ┃ ┗ 📜EditorContext.jsx
 ┣ 📂pages
 ┃ ┣ 📂ide
 ┃ ┃ ┣ 📜IdePage.jsx
 ┃ ┃ ┗ 📜IdePage.module.css
 ┃ ┣ 📂login-page
 ┃ ┃ ┣ 📜LoginPage.jsx
 ┃ ┃ ┣ 📜LoginPage.module.css
 ┃ ┃ ┣ 📜RedirectPage.jsx
 ┃ ┃ ┗ 📜api.jsx
 ┃ ┣ 📂my_page
 ┃ ┃ ┣ 📜my_page.jsx
 ┃ ┃ ┗ 📜my_page.module.css
 ┃ ┗ 📂problem_lists_page
 ┃ ┃ ┣ 📜ProblemListsPage.jsx
 ┃ ┃ ┗ 📜ProblemListsPage.module.css
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜App.test.jsx
 ┣ 📜index.css
 ┣ 📜index.jsx
 ┣ 📜setupProxy.js
 ┗ 📜setupTests.jsx
```

<br>

## 👥 협업 환경 및 툴
- Notion
  - 회의가 있을때마다 회의록을 기록하여 보관
  - 기술 확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리
  - 컨벤션 정리
  - 간트차트 활용한 개발 계획 관리
  - 스토리 보드, 시퀀스 다이어그램, 기능 명세서 등 팀원 모두가 공유해야 하는 문서 관리
- Git & Github
  - 코드의 버전 관리
  - PR시, 팀원이 코드 리뷰를 진행하고 피드백 게시
- Discord, Zep
  - 회의 및 기능 구현, 개발 진행 상황 파악
  - 온라인 개발 진행할 때 서로 공유
- Slack
  - 공지사항 전달 및 회의 진행
  - 진행상황 파악

<br>

## 😎 팀원 역할
- 이다희
  - 팀장, FE
  - IDE 페이지, 마이리스트, FE 코드 리펙토링
- 강수영
  - FE 파트장, FE
  - 소셜 로그인, 마이페이지, 배포
- 변유정
  - 프로젝트 매니저, BE
  - 소셜 로그인, 마이리스트 API, 채팅
- 임동기
  - 서기 및 발표, FE
  - 문제 리스트 페이지, 채팅
- 임소라
  - BE 파트장, BE
  - 코드 컴파일 기능, 배포
- 한석규
  - 기술 문서 담당, BE
  - 문제 리스트 API, IDE 데이터 및 테스트케이스 API, 배포


