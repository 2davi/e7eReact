
# 0415

## url... 자원을 요청하기 위한 *논리적인 경로*

url 매핑은 상대경로와 절대경로로 구분 가능.

상대경로는 ContextPath에서 시작한다는 가정으로...
01/inner.html 또는 ./01/inner.html
.으로 contextPath를 대체할 수 있다.

절대경로는 url의 절대적인 값.. Origin 3요소 직접 지정
`http://localhost:80/first/01/inner.html`

url 매핑 시 location 객체가 갖고 있는 정보는 생략 가능
=>protocol, hostname
==>/first/01/inner.html

## MIME text: 태그 바디의 컨텐츠 종류를 표현하는 문자열

e.g., `<script type="text/javascript">`

## 정적자원과 동적자원

동적자원: 백엔드 모듈의 실행 결과

class path + qualified name + simple name

F6- 한 줄씩
F5- 메소드 안으로
F8- 테스팅 끝낼 때.

tomcat folder>> webapps; docbase => applications; context
"docbase 안에 context가 몇 개 있냥^0^"

(1)클라이언트의 요청은 정해진 시점,순서랄 게 없으니,
불특정 다수로부터 언제 발생할지 모르는 요청을 24시간
리스닝(감시)할 누군가가 필요.
(2)Servlet과 JSP라는 API를 포함하는 녀석으로부터 빌려오기 위함.
(3)WAS: Server가 지닌 자원(동적자원/정적자원)
동적자원 생성해내기 위한 실행파일=application
application을 실행하기 위해 필요한 녀석=서버
=> => Tomcat 필요.

모든 application은 OS 위에서 구동. = native APP
자바는 Virtual Machine을 통해서 구동.
OS 위 VM 위 Application의 main()으로 실행 = stand-alone APP

OS 위에 javaVM 위에 WAS 위에 docbase출신 contexts가 실행됨.
이중 WAS(=Tomcat)가 메인메모리를 할당받아 context에게 배분.
그래서 WAS를 Container라고도 부름.

# 0416

? Tomcat==WAS || Container || Servlet Container
톰캣이 컨테이너로서의 역할을 어떻게 해주나?
? Maven..?
└ 빌드관리 템플릿.
? 개발환경과 실행환경 사이 빌드환경?

## Web APP

OS로부터 시스템 자원을 할당받아 실행되는 Native App
VM 기반으로 실행되는 standalone App => 이식성이 있다
└한 번은 main()메서드가 실행되어야 한다는 특징도 있다.
└'독립형 실행 어플리케이션'

우리가 만들 web application은 혼자 동작할 수 없다.
OS & JDK(VM) & WAS(Tomcat) 위에서 굴러가는 applications.(= context)
└'컨테이너 종속형 실행 어플리케이션'

Web 환경에는 두 endpoints가 네트워크를 사이에 두고 있다.
=> client, server
 요청이 들어오는 문== port
 문을 감시하는 것 == listening
 감시하는 녀석 == server
   요청==명령
   응답==자원
Http, FTP, SMTP
well known port 0~1023 사이의 포트넘버는 되도록 지양.
└이미 점유되었을 것이기 때문 (특히 프로토콜에 의해(80))

클라이언트의 명령이 보내지는 방식
프로토콜://IP:PortNum/C.P./R.P...
I.P를 대체하는 논리적인 이름 = 도메인
DNS=Domain Name Server..
아쓰바 정신없네,,

## 클라이언트와 서버에는 N-Tier라고 불리는 아키텍쳐가 있다

 N-Tier 아키텍쳐는 클라이언트-서버 구조를 표현하기 위해 탄생한 용어.
 하나하나의 endpoint를 각각 tier라고 부른다.
 Client <--> Server 구조를 2-tier라고 한다.
   정적자원을 서비스하는 서버를 Web Server(W.S.)
   동적자원을 서비스하는 서버를 Web App.. Server(WAS)
 Client -- W.S -- WAS -- DB 최소 4티어 쯤 되어야 쓸만하다.

 개발을 앞두고 N의 차수를 먼저
 앞으로 만날 많은 프레임워크를 앞에 두고,
  얘는 나에게 뭘 해주는지를 알아야 한다.

우리는...
Part1. Client와 Server의 관계
Part2. DB와 Server의 관계
Part3. Framework! (mybatis->spring->시큐어리티->boot)

개발환경과 실행환경 사이의 빌드환경?? 아 쓰바~!!
빌드환경을 어쩌구 하면서 Maven을 저쩌구 하겠다.

loopback address:
└모든 endpoints에서 자기자신을 가리키는 IP
└IPv4: 127.0.0.1        (4개의 sector)
└IPv6: 0:0:0:0:0:0:0:1 === 0::1     (8개의 sector)

백엔드 모듈은 50%요청을 분석, 50%는 응답을 생성하는 작업 수행

0과 1의 집합은 다른 말로 스트림Stream
스트림으로 기록하려면 출력 스트림, 읽으려면 입력 스트림이 필요하다.

resp.getOutputStream(=0과 1로 쪼개서), resp.getWriter(==2byte 문자단위)

Linux는 대소문자 구별, Windows는 구분안함

## 제일 불편한거

- 클래스패스 지정하기 => 환경변수 설정으로 해결
- 걍 서블릿만드는 과정 자체가 지난함.
-> 서블릿보다 빠르고 편리한 API의 필요성 == JSP
- 더더 편하고 싶어서 편집기의 개발...

# 0417

Tomcat이란 녀석의 역할에 중점..
a. 개발할 때, 상속받을 수 있는 서블릿, JSP API 제공.

Maven의 역할 `빌드관리툴`
1.프로젝트의 템플릿 환경을 만들어줌
2.jar파일을 관리해줌
  pom.xml 내에 dependencies로 필요한 api 추가해줄 수 있음.
  tomcat 쓸 필요 사라짐.

## Build/Plugin

```html
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.13.0</version>
      <configuration>
      <!-- ${} placeholder: 프로퍼티명으로 값을 대체하는 방법 -->
        <source>${java-version}</source>
        <target>${java-version}</target>
      </configuration>
    </plugin>
  </plugins>
</build>
```

## Dependency

```html
<dependency>
  <groupId>jakarta.servlet</groupId>
  <artifactId>jakarta.servlet-api</artifactId>
  <version>6.0.0</version>
  <scope>provided</scope>
  <!-- compile scope: 컴파일, 테스트, 배포, 실행 통틀어 빌드의 전 과정에서 사용됨. -->
  <!-- test: 일반 환경에서는 사용 불가. 배포할 때도 버리고 떠남. -->
  <!-- provided: 개발,테스트할 때 쓰다가 배포하면서 버리고 감. ∵실행환경에서도 제공하고 있기 때문. -->
  <!-- runtime: 개발,컴파일할 때는 ㅈ도 쓸모없다가, 배포할 때 끼워서 데려감. 실행환경에서 필수기 때문. -->
</dependency>
```

# 0418

## Servlet (What/Why/How)

- Web을 통해 전송된 요청을 수신하고, 그(요청)에 맞는 처리를 진행하고, 그 결과로 동적 응답을 생성할 수 있는 자바 객체의 명세(spec). 해당 명세를 구현하고 있는 클래스(code)가 바로 HttpServlet.
- 동적 응답을 생성하기 위해.

- 콜백은 특정 이벤트 발생 시, 시스템 내부적으로 자동 호출되는 함수

- 뭐하는 녀석인지
- 어떻게 해주는지
- 왜 쓰는지

## Resources

- 자원 분류기준*
- desc. description 그 파일 안에는 이론적인 배경을 Summarize할 거임
- Data -> Information -> Content
- 날재료> 요리         > 플레이팅

### 동적자원

- 요청이 들어오고 그에대한 처리가 이루어진 다음에 생성됨.
- 처리 결과물만 응답데이터로 나가는 자원.
- 서블릿의 매핑정보가 url을 대신.

### 정적자원

- 빌드 처리가 필요하지 않은 자원 `.js, .html`
 원형 그대로 사용되는 파일
- URL이 존재한다. `ContextPath + (webapp이하 파일경로)`

#### javascript

```HTML
<script type="text/javascript" src="/ws01/resources/js/now.js">
<!--<>요 공간<>을 TAG의 BODY라고 부른다.
	<script>태그는 src속성파일에 요청을 보내고 받은 응답을 BODY에 덮어쓰는 동작을 한다.
	<script .../>로 body를 막으면 동작을 못한다. -->
</script>
```

## Annotation

 1. Marker Annotation         `마킹해줌`
  e.g.,@WebServlet
 2. Single Value Annotation   `값이하나`
  e.g.,@WebServlet("~")
  value 속성만 속성명 생략 가능...
 3. Mutli Value Annotation
  @WebServlet(name = "~")
  name속성 하나만 기술해도, value, load-on..같은 기본값 다수 존재.
  CoC: Convension Over Configuration
  관행적으로 Simple Name(=클래스명)을 따라감
  
## 동기와 비동기

- 프로세스가 LOCK을 순서대로 이어받음 `sync` lock을 받아야 뭘 할 수 있음
- LOCK이란 개념이 없는 `async`

### fetch & Promise-chaining & Modulization

### Run Configuration

관행적으로 버츄얼머신에게 커스텀옵션을 넘겨주는 명령어^0^ -D

# 0421

## Cookie & Session, Storage

- 데이터를 저장하는 공간.
- 2-Tier 이상 구조 == 저장공간도 둘 이상이다.
- 서버에 저장되면 Session, 클라이언트 사이드에 저장되면 Cookie
- 또다른 저장소의 개념으로 Storage가 있다. 모두 클라이언트 사이드에 마련된 저장소.

- LocalStorage와 SessionStorage의 차이점
  SessionStorage: 현재 페이지, 탭이 바뀌거나 브라우저를 끄면 X
  LocalStorage: SessionStorage보다 넓은 범위에서 사용됨.
- 공통점
  데이터 저장기한의 만료 시점을 선택할 수 없다.
  └그걸 결정해주고 싶을 때 Cookie를 이용한다.

## JSON

- 데이터를 표현하는 시스템이 서로 다른 구조에서 메세지를 주고받으려면 공통적으로 사용하는 타입을 사용해야 하고, 대표적인 것이 문자열(JSON)
- xml이라는 데이터 표현 방식은 어떤 데이터를 담으려면 태그를 열고 닫아야 한다. 하지만 JSON은 중괄호만 열고 닫으면 그만이다. (가볍다)

## (review 0418) Servlet

- `동적 응답을 생성`
- Servlet의 모든 기능을 코드로 만든 클래스 HttpServlet
- 서블릿 컨테이너는 하나의 요청을 처리할 때 내부에 스레드를 통해 처리한다.
- 멀티 쓰레딩.
- Thread Pooling
  시스템 부하/메모리 사용이 언제나 일정하다(최대 20개로 고정).
  요청 처리의 소요시간을 최소화한다.
- DB와의 커넥션은 시간이 오래 걸리므로 커넥션 풀링이 필수다.
- ServletContext application = ..
  Server인 Tomcat과 대화하기 위해서, 현재 App(Context)의 정보가 필요해서서  

```java
■■■현재 객체의 hashCode: 1908034628, 현재 쓰레드: http-nio-80-exec-2
■■■현재 객체의 hashCode: 1908034628, 현재 쓰레드: http-nio-80-exec-3
■■■현재 객체의 hashCode: 1908034628, 현재 쓰레드: http-nio-80-exec-4
■■■현재 객체의 hashCode: 1908034628, 현재 쓰레드: http-nio-80-exec-5
■■■현재 객체의 hashCode: 1908034628, 현재 쓰레드: http-nio-80-exec-6
■■■현재 객체의 hashCode: 1908034628, 현재 쓰레드: http-nio-80-exec-7
```

## Element & Entry

- 배열, 리스트와 같이 요소가 한 개의 값인 경우 Element
  ==> 순차집합(향상된for문 가능)
- map과 property는 하나의 요소가 KEY와 VALUE값의 한 쌍으로 이루어짐 => Entry

## Lambda function & try~with resource

- Syntactic sugar: 최대한 코드를 줄인다.
- `함수형 프로그래밍 방법론`

## MIME TEXT

- `Multi-purpose Internet Mail Extension`
- 전송 자원의 타입과 형식에 대한 정보를 표현하는 텍스트.
  e.g., text/html; charset=UTF-8
- MIME type은 클라이언트가 수신한 응답데이터를 어떻게 소비할 것인지 사용 방식(소비 형태)을 결정하게 해준다.

## Stream Copy (IO Stream의 중개 역할)

## Servlet의 다섯 가지 기본 객체

- ServletContext
- Request
- Response
- ?
- ?

# 0422

## Model1 & Model2 Architecture

- 책임이 분리되어 있는가(2), 아닌가(1)

- Client to Server: Request
- Server to Client: Response
- 여기서 서버의 역할은 세 가지 이상.
  1.요청을 분석, 2.그에 대한 프로세스, 3.응답을 생성해서 전송
- 객체지향언어의 다섯가지 원칙 SOLID 중 S;
  단일책임의 원칙칙

- 형태가 고정되어 있는 틀(e.g., HTML tags) == 템플릿

- Refactoring
  Alt + Shift + R;

## JSP라는 템플릿 엔진

- JSP는 템플릿과 데이터를 결합시켜주는 엔진
- JSP 파일은 그 자체로 자바 객체인 셈.
- JSP는 백엔드 모듈.

## 렌더링 방식

- 최종 html페이지 전체가 어디에서 만들어지나..?
- 템플릿과 데이터가 어디에서 결합되는가의 차이

- 서버사이드렌더링구조SSR
   서버에서 만들어지면 템플릿엔진을 쓰든 안쓰든 SSR이다.
   멀티 페이지 어플리케이션

- 클라이언트사이드렌더링CSR
   싱글 페이지 어플리케이션

## 함수형 프로그래밍 방법론

- 일급 함수
  객체 없이도 단독으로 존재할 수 있는 함수

# 0423

## JSP

- JSP 컨테이너로서의 톰캣이 하는 역할
- - JSP에 최초의 요청이 실행됐을 경우 컴파일함
  D:\A_TeachingMaterial\05_JSP\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\work\Catalina\localhost\ws01\org\apache\jsp\_01`
- scriptlet
- declaration
- directive
- expression
- comment
- EL && JSTL

## 자원(url로 자원을 식별한다.)

# 0424

## URL과 자원의 식별체계

- 서버를 기준으로 설정한 경로가 바로 URL
   진짜 주소를 노출시키지 않기 위해 가상의 url을 사용.
- 파일 시스템 자원: 물리 경로로 접근
- 클래스패스 자원
- 네트워크 자원(웹 자원): URI로 접근 == 논리적으로 공개되어있는 식별체계

## 어제의 과제 같이 풀어보기

## Request객체와 Session객체

# 0425

# 0428

0과 1의 데이터를 전송할 떈 Packet 통신이 중요하다.
Request는 총 세개의 Part로 우편물을 표현한다.

- Request Line
    Line 내의 메소드에 따라 사용자의 목적이 달라지고, 그것이 Request Body에 연관.
    어떤 자원인지 식별할 수 있으며(URI), 어떤 Action을 할 것인지도(METHOD).
- Request Header
    Body의 데이터에 대한 정보가 담긴 메타데이터가 위치(NAME: VALUE)
    클라이언트가 받으려는 데이터 형식(응답 데이터의 조건 설정)
    : accept[MIME], accept-language[LocaleCode(LanguageCode)]
    : content-*
- Request Body
    서버로 보내려는 진짜 데이터가 위치

# 0429

# 0429 _보강

- WebScrapping
  `https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Accept`
  비동기요청을 보내서 HTTP 헤더의 하위 목록들(Accept *)만 꺼내오고 싶다 ==스크랩핑
  현재 document의 출처와 비동기요청의 출처가 동일하다 == SameOriginPolicy동일출처의 원칙
  Proxy: 대리자, 가짜서버

- CORS
- Proxy Server

- 북마킹 사이트
`https://apache.org/` 개발하는 내내 참고할 사이트
`https://mybatis.org/mybatis-3/ko/index.html`
`https://hibernate.org/` 시간만 되면 여기서 두 개의 프레임워크 써보려구
`https://spring.io/`
`https://developer.mozilla.org/ko/` 웹 개발을 하려면 반드시 알아야 하는 사이트

# 0430

## Request

- 어떤 요청이느냐에 따라 중요한 헤더가 달라진다.
  GET요청: `accept`
  POST요청: `content-type`
- PUT요청은 Parameter를 보내지 않고, JSON Payload로만 주고받는다.
- DELETE요청은 BODY가 필요없다.

# 0501

## Response:: 답장을 쓰는 방법

- 가장 먼저 궁금한 것: 내 명령의 처리결과 성공/실패
  숫자로 되어있는 상태코드(Status Code)
    100:
    200:
    300:
    400: 실패한 사유도 함께
    500:
- Response에서 꼭 알아야 하는 Headers

## 우리가 새로운 Enum을 정의해서 쓸 거야

## Stream API

# 0502

## Calendar 과제 이어서

### EL과 JSTL 활용

### Time API

# 0507

## .
