# 꿀팁

정리는 양이 너무 늘어나지 않게
 양이 늘어나면 검색하는게(A.I.) 빠름!

## 0410 _변수 선언, Wrapper, delete

const 주의 객체 선언 시 내용물은 바꿀 수 있당
+만 문자열/산술 연산, 나머지는 산술 연산
원시타입 vs 객체타입 동작은 복사와 참조(별명)
Wrapper 불편한 걸 => 편하게 쓰기 위해 만든다.
delete (객체의 속성 지우기)
let, const 사용을 권장, 삶의 생명주기를 {}block이 관장한다. (var는 function())
객체 선언시 속성 배열식 접근법(연봉흔들려)
JavaScript는 동적 언어라서 대부분 형변환이 자동으로 일어난다.

## 0411 _callback

callback 별거 아니당. 비동기랑 관련이 없다. 비동기 결과 처리에 많
선언/호출을 헷갈려한다. 눈이 따라가기만 하면 진짜 암것도 아니당
눈이 따라가려면 자주 봐야 한당.

## 0414 _proxy

선언과 표현식(expression) 즉각실행함수 (), !
비동기(ajax) => 이젠 cpu가 1개가 아니당!
proxy(쁘락치) => 제어포인트가 생긴당. 느껴야!
개발자에게 중요한 css => 레이아웃, position, display, transform

## 0415 _Origin, CrossOriginResourceSharing

Origin 3요소 => http:// 프로토콜, sumin.com DN(hostname, 서버명), :80 포트번호
CORS: Cross Origin Resource Sharing => AJAX의 제약사항 =>
        ∵서버의 반환값을 메모리 변수값으로 받기 때문! 조작이 거저당.
        -CORS Policy에 따라 default: refect
극복방법: 회피(서버우회). 서버에서 서버로 요청하는 건 default:access, 내 서버를 통해 요청한다.
          이것만 전용으로 해주는 사이트도 있음(유료)
개념공부를 잘 해야 해 => 자꾸 프로그램 상황과 현실을 비교해서 이해해야함

잠자기 전에 난 최고의 프로그래머당! 을 생각하면서 잠에 듭니다.
자기암시! 를 반복하면 믿게 되고, 믿으면 그에 맞게 행동하게 된다.
(이건 저 믿고 꼬옥 2달 정도 해봅니다.)

## 0416 _템플릿패턴, this함수

`TAG.dataset.DATANAME;` data- attributes는 dataset property에 저장
`TAG.cloneNode(true);`  깊은복사
`document.forms;`
템플릿패턴 :=> display:none;으로 견본을 두고 .cloneNode(true) 로 복사해서 쓰기
           :=> `<table>`은 문자열 더하기를 사용하는 편.
z-index 이용해서 모달창 위치 ^0^  :=> 무조건 큰 숫자가 위로 온다
this에 대한 고찰 :=> call vs apply vs bind
 FUNCTION.call(DIRECT, PARAMETER [,...]);
 FUNCTION.apply(DIRECT, [PARAMETER,...]);
 FUNCTION.bind(DIRECT, PARAMETER [,...]);
call과 bind의 문법은 동일. 다만 call은 함수 즉시 호출 기능이 (+)

## 0417 _함수클래스, event

function을 Class처럼  :=> 클래스; `사용자 정의 데이터 타입`
        field:  `상태를보존` :=>객체마다 달라야 함
        methos: `실행과반환` :=>객체끼리 공유해야 메모리 절약 -> `Prototype`
d3.js || Chart.js    `데이터 시각화: DB를 프로젝트는 무조건 통계가 뒤따라야.. (data->information)`
event.. :=>event.target vs event.currentTarget
        :=>event.stopPropagation()              `이벤트 버블링 & 캡쳐링`
        :=>event.preventDefault                 `Form 외에도 built-in EVENT 강제로 방지 가능`
        :=>inline/ onEVENT/ .addEventListener() `이벤트 등록법 3가지`
           inline tag에 함수명()에는 bind가 적용되어 있음.
`https://cdnjs.com/`                 cdn 검색
`https://sweetalert2.github.io/`     alert을 모달창으로 띄우는 거
`https://d3js.org/`                  데이터 시각화(통계) 툴툴
`https://c3js.org/`
`https://www.chartjs.org/`

## 0418 _공유/참조, 배열, this

`공유` == `참조`;
METHOD CHAINING :=> prototype function에 `return this;`를 붙이면 메소드 체이닝 가능.
                :=> '읽기 함수`Getter`'에는 체이닝을 붙이지 않는다.
Array..

배열의 중요 메소드
  => prototype => 메소드가 공유되어서 메모리를 절약
  => callback / 메소드 체이닝 / return this 가 되었다.
  => forEach/ map/ filter/ sort :=> callback 함수 연습
  => 함수 선언/ 함수 호출
  => 눈이 따라 가기만 하면, 나머지는 시간이 해결해줌!

this => call/ apply/ bind(있어 보인당 -> 많이^0^)

## 0421 _LocalStorage, 선언적 프로그래밍(<->명령형)

LocalStorage만 잘 써도 Cookie가 사실상 필요 없어진다.

```javascript
localStorage.setItem(/*KEY*/, /*VALUE*/);
localStorage.getItem(/*KEY*/);
localStorage.remove(/*KEY*/);
localStorage.clear();
//Storage에 저장된 객체 불러올 땐 JSON.parse(..getItem());
//수정한 다음 Storage에 덧붙여씌울 땐 JSON.stringify(..setItem());
```

JSON({}, []) :=> parse, stringify
└문자열 <=> JS배열

DB이야기
 Oracle: 관계형DB_정형화된 데이터  //업무기반
 MongoDB: 객체형DB_비정형 데이터   //빅데이터 수집 및 정제
 └테이블 하나가 배열 하나, 각각의 요소는 비정형 객체들.
 └memTab을 브라우저 LocalStorage에서 확인한 모습 == MongoDB TABLE

선언적 프로그래밍: 명령형(How) / 선언형(What)

### 페이지네이션

```javascript
//■□■기본변수값값
const cntPerPage = 10;

let totalCnt = '자료리스트의 길이';

let totalPageCnt = Math.ceil(totalCnt/cntPerPage);

let currentPage = 1; //현재페이지. 기본초기화값은 맨처음 1
if( location.href.indexOf("?") != -1 ) { //queryString이 없으면 .indexOf 반환값 -1
  currentPage = location.href.split("?")[1].split("=")[1];
  /* .split("?")[1]은 길이2의 문자열 배열을 반환한다.
     "?"를 기준으로 앞부분(http://~~)은 인덱스 0, ?이후 쿼리스트링 부분이 인덱스 1에 해당하는 배열 요소값.
     그녀석을 또 split으로 나눠서 key=value일 때 value값을 가져온다. */
}

let startNum = (currentPage -1) * cntPerPage; //각 페이지 리스트의 첫 인덱스

let endNum = startNum + cntPerPage; //각 페이지 리스트의 마지막 인덱스
if( endNum > totalCnt ) endNum = totalCnt;
  /* 마지막페이지의 경우 cntPerPage를 꽉 채운다는 보장이 없으니까. */

//■□■삭제기능
if(gesis.length%cntPerPage == 0)
  location.href = `/LocalStorage활용.html?page=${currentPage-1}`;
  //마지막 페이지의 해당사항을 전부 삭제했을 시, 그 직전 페이지로 새로고침
else
  location.href = location.href;
  //주소표시줄 url을 복사해서 enter치는 효과 == 새로고침

```

## 0422 _구조분해, 모듈, SpreadOperator

구조분해
         => 리액트에서 쓰니깡^0^
         => {} = {}, [] = [] ( = 연산자 양쪽 데이터타입이 일치 )
         => 코드의 양이 줄어든다는 점이 뽀인또

모듈
         => ESM  ( export / import / export default )
         => 모듈끼리는 분리되어 있다. (서로 영향을 주고받지 않음!)
         => 멋진 말로 isolation.

전개연산자
         => **새로운 객체가 새로 생성되어 할당**
         => (기존 참조랑 헷갈리지 말길)

## 0423 _await/async, JQuery

구조분해는 함수의 매개변수에도 적용 가능하다.

await / async
         => 단점: 함수를 1 개 만들어야 한다.
         => 장점: 함수 안에서 비동기를 동기처럼 보이게 만들어 준다.
                  권장 된다!! ^0^(간단한 경우에는 Promise 방식으로...then())
         => async 함수의 반환값으로는 Promise를 넣어준다.
         => async 함수는 업무의 단위별로 하나를 만든다. 여러개가 쌓이면 보면서도 헷갈림

JQuery
         => 팩토리 패턴 (new 연산자를 숨김)
         => 라이브러리 만드는 패턴 (즉각실행함수 => 초기화 작업, 핵심코드 블록화)
         => callback 막상 써보니... 별 거 읎드라^ㅂ^ㅗ
                     가장 많이 사용되는 게,
                     반복문을 대신 돌려주면서서 콜백에 index, value를 넘겨준다.
         => callback을 매개변수로 받는 메소드를 만들 수 있으면 OK!(시간을 두고 차분히 연습)
         => 읽기/ 전부쓰기/ 부분조작(callback)

## 0424 _Axios, AG-Grid

- Context: 한 소프트웨어의 지배 권한이나 전체 정보를 지니고 있는 객체.
           대전이 프로그램이라면 컨텍스트는 대전시청.

- SVG: 좌표값만 받는 그림파일. 크기를 조절해도 그래픽이 안 깨짐. 해상도에 무관함.

- Axios: fetch도 기본적으로 알아야 함!
         try/catch 를 이용해서 JSON.stringify/ JSON.parse를 쓰지 않아도 되게 만들어줌
         node를 백엔드로 쓰면 서버에서 서버로의 요청도 axios로 가능
         .create()로 컨트롤러의 맵핑 이름과 동일하게 객체를 만들어 쓰면 가독성과 디버깅에 유리

- AG-GRID: GUI의 시대적 흐름^0^
           최종 프로젝트때 1~2개는 이걸 이용해서 보길! =>
           국내엔 이런 web-component 만드는 회사가 거의 없고, naver나 daum 오픈소스 정도..?

- 규민 스크립트를 잘하는 법: 이런 거 업성^ㅂ^ㅗ
        - 익숙해지는 데 시간을 투자하는 것이 최고의 방법
          console.log를 많이 써서, 결과나 흐름을 눈에 보여줘라
          추적의 달인이 되어야 디버깅이 되고, 디버깅이 되면 결과가 보이니까
        - 성취(개발자가 살아가는 에너지)감을 얻게 됨>_<_b
          넘무 눈의 힘으로 오타 찾는 거 힘들어, 범위를 좁혀줘야...ㅠ
          (오타가 의심되면 아예 그 부분을 다시 작성하는 것도 테크닉)
        - 나이가 어리면 좀 더 시간을 줌!

## 0425

- 라이브러리: react(점유), 프레임워크: vue(소규모), angular(대규모)
  *프레임워크: 규격이 정해진 틀
- 프론트 프레임워크를 쓸 때 Node.js가 거의 기본급에 가깝다.
