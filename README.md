# 202130418 유건호

### 0904
```
- chcolatey에 복사후 powershell에 붙여놓기

https://chocolatey.org/install#individual

- git 다운(마찬가지로 powershell에 다운)
https://community.chocolatey.org/packages?q=git

node install 
nvm install
```
```js
   Get started by editing&nbsp;
            <code className={styles.code}>pages/about.js</code>
          </p>
```

- 바벨이나 웹팩의 설정도 커스터마이징 가능함
- 바빌 : 자바스크립트 트랜스컴파일이며 , 최신 자바스크립트 코드를 하위 호환성을 보장하는 스크립트 코드로 변환하는 일을 담당함
- 하위 호환성이 보장되면 어떤 js코드도 실행할 수 있음


### 0828
---
### NEXT.JS
- Next.js는 리액트를 위해 만든 오픈소스 자바스크립트 웹 프레임워크다
- 리액트에는 없는 다양한 기능 제공
    - 서버 사이드 렌더링 (SSR)
    - 정적 사이트 생성 (SSG)
    - 증분 정적 재생성 (ISR)

``` 
SSR은 미리 만들어 놓은 페이지를 서비스 하기 때문에 속도는 빠르지만 수정이 불가능하다. 
이러한 단점을 보완하고자 나온것이 ISR이며 이미 생성돈 페이지를 일정 시간이 지난 후에 다시 생성한다.(최신 데이터로 업데이트)
```
npm i -g create-react-app
 npx create-next-app@latest
name : page-router
next.js가 제공하는 새로운  기능
- 코드 분할
- 파일 기반 라이팅
- 경로 기반 프리페칭
- 서버 사이드 렌더링(SSR)
- 정적 사이트 생성 (SSG)
- 증분 정적 콘텐츠 생성(ISR) 
- 타입스크립트 기본 지원 : 배포 후에도 재 배포없이 계속 업데이트(일정 시간마다 SSG를 재 렌더링)
- 자동 폴리필 적용 : 이전 브라우저에서 최신 기능을 제공하는 데 필요한 코드를 제공
- 이미지 최적화 : 컴포넌트로 제공하는 이미지의 최적화 기술
- 웹 애플리케이션의 국제화 지원 : 다국어 지원
- NEXT.JS는 현재 넷플릭스,트위치,틱톡,나이키,우버,엘라스틱 등 사이트에서 사용 중

### 비슷한 프레임워크
- Gatsby

- Razzle

- Nuxt.js

- Angular Uriversal