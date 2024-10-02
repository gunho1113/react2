# 202130418 유건호

### 1002

```jsx woo/index.jsx
export default function index() {
  return (
    <>
      <h1>bar/woo/index page</h1>
      <h1>localhost:3000/bar/woo</h1>
    </>
  );
}
```

```jsx index.jsx
export default function index() {
  return (
    <>
      <h1>bar/index page</h1>
      <h1>localhost:3000/bar</h1>
    </>
  );
}
```

```jsx woo.jsx
export default function BraIndex() {
  return (
    <>
      <h1>bar/woo/index page</h1>
      <h1>localhost:3000/bar/foo</h1>
    </>
  );
}
```

```jsx blog/page.jsx
export default function Blog(props) {
  console.log(props);
  return (
    <>
      <h1>Blog page</h1>
      <h1>blog: {props.param.Blog}</h1>
      <h1>blog: {props.searchParams.id}</h1>
      <h1>blog: {props.searchParams.name}</h1>
    </>
  );
}
```

### 0925

```js foo.jsx
export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({ repo }) {
  return <>{repo.name}</>;
}
```

```js page.jsx
export default async function Page() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

Next는 서버사이드 렌더링 외에도 많은 내장 컴포넌트와 함수를 제공함

---

#### 라우팅 시스템

- React의 react router,reach router 등은 클라이언트 라우팅만 구현 가능함
- next는 파일시스템 기반 페이지의 라우팅을 함
- 페이지는 /pages 디렉토리 안의 js,jsx,ts,tsx 파일에서 export한 react 컴포넌트다

- 블로그와 같이 컨텐츠를 분리해야한다면
- /pages 아래 디렉토리를 만들고 라우팅 규칙 만들기면 됨
- /pages 디렉토리 내부에는 계층적 구조로 라우팅 규칙을 만들 수 있음
- /pages/props 안에 index.js와 [slug].js 를 만들어 jsx를 반환함

- 경로 매개변수를 사용해서 동적 페이지를 쉽게 만들기 가능함
- 내장 getServerSideProps 함수를 통해 URL에서 동적으로 [name] 변수 값을 가져오는것
- greet/Mitch 주소로 가면 'Hello,Mitch!'라는 문구가 렌더링 됨

---

- useRouter는 next/router에서 가져올수 있고
- useRouter Hook을 사용해서 query 매개 변수를 가져옴

### 0911

- ECMAScirpt 기능중 파이프라인 연산자 사용하기
  - 파이프라인은 공식적으로 채택되지 않은 연산자다.
  - 기능을 사용하려면 바벨 플러그인을 설치해야됨

## ` npm install --save-dev @babel/plugin-proposal-pipeline-oprator @babel/core`

- babel

  - 단점
    - 변환된 코드를 이해하기 어렵다
    - 원코드에 비해 변환 코드의 길이가 늘어남
    - 시간이 오래걸림

  -장점

  - next 12이후 별도의 설정없이 swc를 사용가능하며 nextjs에 내장됨
  - pust의 WASM 지원으로 어떠한 플랫폼에서 개발 가능함
  - 커뮤니티에서 도움받기 쉽다.

  `npx create next-app@latest`

---

#### 렌더링 전략

    - 렌더링 전략이란 웹 페이지 또는 웹 애플리케이션을 웹 브라우저에 제공하는 방법을 의미함

---

#### 서버 사이드 렌더링 (SSR)

- 웹 페이지를 제공하는 가장 흔한 방법
- APM을 이용하는 일반적인 웹 페이지 생성임
- 자바스크립트 코드가 적재되면 동적으로 페이지 내용을 렌더링함

- NEXT JS도 이와 같이 동적으로 페이지를 렌더링 할 수 있다.
- 스크립트 코드를 넣어 웹 페이지를 동적으로 처리 할 수 있는 것을 하이드레이션이라고 부름
- 서버 사이드 렌더링 -> 자바스크립트가 하이드레이션된 페이지를 전송 -> 클라이언트에서 DOM위에 각 스크립트 코드를 하이드레이션: 페이지 새로 고침 없이 사용자와 웹 페이지간 상호 작용이 가능함

#### SSR 장점

- 더 안전한 웹 애플리케이션 : 쿠키 관리,주요 API, 데이터 검증 등과 같은 적업을 서버에서 처리하기 때문에 중요한 데이터를 클라이언트에 노출할 필요가 없기 때문임
- 더 뛰어난 웹 사이트 호환성 : 클라이언트 환경이 자바스크립트를 사용하지 못하거나 오래된 브라우저를 사용하더라도 서비스를 제공할 수 있음.
- 더 뛰어난 SEO : 서버가 렌더링한 HTML을 받기 때문에 봇이나 웹 크롤러가 페이지를 렌더링할 필요가 없기 때문임.

#### SSR이 최적의 렌더링 전략이 아닌 경우

- 클라이언트가 페이지를 요청할 때마다 페이지를 다시 렌더링 할 수 있는 서버가 필요함
- 다른 방식에 비해 SSR이 더 많은 자원을 소모하고, 더 많은 부하를 보이며 유지 보수 비용도 증가함
- 페이지에 대한 요청을 처리하는 시간이 길어짐
- 페이지가 외부 API또는 데이터 소스에 접근해야 한다면, 해당 페이지를 렌더링 할 때마다 이를 다시 요정해야함
- 페이지 간의 이동은 CSR에 비해 느림
- 중요한 것은 NEXT JS 가 기본적으로 빌드 시점에 정적으로 페이지를 만든다는 것이다.

---

#### 클라이언트 사이드 렌더링 (CSR)

- 실제 렌더링은 클라이언트에서 이루어짐
- CSR로 생성한 앱의 HTML을 보면 DIV태그 하나 밖에 없다. 그래서 빈 화면만 보였을 것이다.
- 빌드 과정에서 JS와 CSS파일을 HTML 페이지에 불러오도록 만들고 root div에 렌더링 한다.

#### CSR을 사용할 때의 주요 이점

- 네이티브 앱처럼 느껴지는 웹 앱

  - 전체 자바스크립트 번들을 다운로드 한다는 것은 렌더링할 모든 페이지가 이미 브라우저에 다운로드 되어 있다는 뜻
  - 다른 페이지로 이동해도 서버에 요청할 필요 없이, 바로 페이지를 이동할 수 있다.
  - 페이지를 바꾸기 위해 새로 고칠 필요가 없음

- 쉬운 페이지 전환
  - 클라이언트에서의 내비게이션은 브라우저 화면을 새로 고칠 필요 없이 다른 페이지로의 이동을 가능하게 만듬
  - 페이지 간 전환에 멋진 효과를 넣을 수 있다. 애니메이션을 방해할 요소가 없기 때문이다.
- 지연된 로딩과 성능
  - 웹 앱은 최소 필요한 HTML만 렌더링함

#### 단점

- 네트워크 속도가 느린 환경에서는 번들이 모두 다운로드 될 때까지 계속 빈 페이지를 보아야 한다
- 검색 로봇에게도 그 내용은 빈 것으로 보임
- 번들을 모두 받을 때까지 검색로봇이 기다리기는 하지만 성능 점수는 낮을 것 이다.

---

#### 정적 사이트 생성

- 쉬운 확장
  - 정적 페이지는 단순 HTML 파일이므로 CDN을 통해 파일을 제공하거나, 캐시에 저장하기 쉽다.
- 뛰어난 성능
  - 빌드 시점에 HTML 페이지를 미리 렌더링 하기 때문에 페이지를 요청해도 클라이언트나 서버가 무언가를 처리할 필요가 없다.
- 더 안전한 api 요청
  - 외ㅐ부 API를 호출하거나,데이터베이스에 점근하거나, 보호해야할 데이터에 접근할 일이 없습니다. 필요한 모든정보가 빌드 시점에 미리 레더링됨

---

- SSG는 높은 확장성과 뛰어난 성능을 보여주지만 다음 배포 전까지 내용이 변하지않는 단점이 있다.

### 0904

hcolatey에 복사후 powershell에 붙여놓기

https://chocolatey.org/install#individual

- git 다운(마찬가지로 powershell에 다운)
  https://community.chocolatey.org/packages?q=git

node install
nvm install

````
npx create next-app@latest
```js
   Get started by editing&nbsp;
            <code className={styles.code}>pages/about.js</code>
          </p>
````

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
next.js가 제공하는 새로운 기능

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
