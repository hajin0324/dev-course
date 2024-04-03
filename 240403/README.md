## Cookie
웹 서버가 브라우저에게 지시하여 사용자의 로컬 컴퓨터에 파일 또는 메모리에 저장하는 작은 기록 정보 파일

파일에 담긴 정보는 인터넷 사용자가 같은 웹사이트를 방문할 때마다 읽히고 수시로 새로운 정보로 바뀔 수 있음

정보를 유지할 수 없는 Connectionless, Stateless의 성격을 가진 HTTP의 단점을 해결하기 위해 쿠키라는 개념 도입

<br>

### 🍪 Cookie 종류

**Session Cookie**

Expire date를 설정하고 메모리에만 저장되며 브러우저 종료시 Cookie 삭제

<br>

**Persistent Cookie**

장기간 유지되는 쿠키이며, 파일로 저장되어 브라우저 종료와 관계없이 사용

<br>

**Secure Cookie**

HTTPS에서만 사용되며, 쿠키 정보가 암호화 되어 전송

<br>

**Third-Party Cookie**

방문한 도메인과 다른 도메인의 쿠키 보통 광고 베너 등을 관리할 때 유입 경로를 추적하기 위해 사용

<br>

### 🍪 Cookie 인증 방식

1. Client가 Server에게 HTTP Request

2. Server가 Client에게 HTTP Response + Set-Cookie

3. Client가 Server에게 HTTP Request + Cookie

4. Server가 Client에게 HTTP Response


<br><br>

## Session

HTTP Session id를 식별자로 구별하여 데이터를 사용자의 브라우저에 쿠키형태가 아닌 접속한 서버 DB에 정보를 저장

클라이언트는 HTTP session id를 쿠키로 메모리 저장된 형태로 가지고 있음

메모리에 저장하기 때문에 브라우저가 종료되면 사라지게 됨

<br>

### 🪢 Session 인증 방식

1. Client가 Server에게 Resource 요청

2. Server가 HTTP Request를 통해 쿠키에서 Session id를 확인한 후 없으면 Set-Cookie를 통해 새로 발행한 Session-id를 보냄

3. Client가 Server에게 Session id를 포함하여 Resource 요청

4. Server는 Session id를 통해 해당 세션을 찾아 클라이언트 상태 정보를 유지하며 Client에게 Response

<br><br>

## JWT(JSON Web Token)
JWT는 인증에 필요한 정보들을 암호화시킨 JSON 토큰

JWT 인증은 JWT 토큰을 HTTP 헤더에 실어 서버가 클라이언트를 식별하는 방식

<br>

### 🌈 JWT 구조
XXXXXX.YYYYYY.ZZZZZZ

<br>

**Header**

alg : 서명 암호화 알고리즘(ex. HMAC SHA256, RSA)

typ : 토큰 유형

<br>

**Payload**

서버와 클라이언트가 주고받는 시스템에서 실제로 사용될 정보에 대한 내용

- Registered claims : 미리 정의된 클레임
  - iss(issuer, 발행자)
  - exp(expiration time, 만료 시간)
  - sub(subject, 제목)
  - iat(issued At, 발행 시간)
  - jti(JWI ID)

- Public claims : 사용자가 정의할 수 있는 클레임 공개용 정보 전달을 위해 사용

- Private claims : 해당하는 당사자들 간에 정보를 공유하지 위해 만들어진 사용자 지정 클레임, 공유받는 특정 유저들을 구분할 수 있는 정보를 담음

<br>

**Signature**

Header + Payload + 서버가 갖고 있는 유일한 key 값을 Header에서 정의한 알고리즘으로 암호화

Signature = Base64Url(Header) + . + Base64Url(PayLoad) + server’s key [HS256]

<br>

### 🌈 JWT 절차

1. Client가 Server에게 로그인 요청(POST /login, body(username, password))

2. Server는 내부 로직 확인 후 JWT 토큰 발행

3. Server가 Client에게 JWT 토큰 전달

4. Client는 Header or Cookie에 JWT 토큰을 담아 request를 보냄

5. Server는 토큰 해독 및 검증

6. Server가 Client에게 request에 대한 response를 보냄

<br>

### 🌈 JWT 모듈 사용

**Install**
``` bash
npm install jsonwebtoken
```

**Use**
``` javascript
// jwt 모듈 import
const jwt = require('jsonwebtoken');

// 서명 = 토큰 발행, default (HMAC SHA256)
const token = jwt.sign({ name: 'user' }, 'secret_key');
console.log(token);

// 검증
// 만약 검증에 성공하면, 페이로드 값을 확인할 수 있음
const decoded = jwt.verify(token, 'secret_key');
console.log(decoded.name)
```

<br><br>

## .env(environment)
외부에 유출되면 안되는 중요한 환경 변수들을 따로 관리하기 위한 파일
- 내용 : key = value
- 주석 : #

<br>

### ⚙︎ dotenv
**Install**
``` bash
npm install dotenv
```

**Use**
``` javascript 
// 모듈 import
const dotenv = require('dotenv');

// 환경 변수 불러오기
dotenv.config();

console.log(process.env.PRIVATE_KEY);  // secret_key
```

.env
``` bash
PORT = 4000  # express port number
PRIVATE_KEY = 'secret_key'  # JWT 암호키
```