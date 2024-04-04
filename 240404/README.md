## HTTP(Hyper Text Transfer Protocol)
서버와 클라이언트가 서로 데이터를 주고 받기 위해 사용되는 통신 규약

링크를 통해 다양한 종류의 데이터들을 전송 가능
- HTML, TEXT
- IMAGE, 음성, 영상, 파일
- JSON, XML(API)

<br>

### 🔗 HTTP 동작
클라이언트가 브라우저를 통해서 요청하면 서버는 해당 요청에 맞는 결과를 응답
- request : client -> server
- response : server -> client

<br><br>

## HTTPS(Hyper Text Transfer Protocol Secure)
기본적으로 HTTP와 거의 동일하지만 데이터를 주고 받는 과정에 보안 요소가 추가되어 서버와 클라이언트 사이의 모든 통신 내용이 암호화됨

<br>

### 🔑 대칭키 암호화와 비대칭키 암호화
대칭키 암호화
- 클라이언트와 서버가 동일한 키를 사용해 암호화/복호화를 진행함
- 키가 노출되면 매우 위험하지만 연산 속도가 빠름

<br>

비대칭키 암호화
- 1개의 쌍으로 구성된 공개키와 개인키를 암호화/복호화 하는데 사용함
- 키가 노출되어도 비교적 안전하지만 연산 속도가 느림

<br>

### 🔑 공개키와 개인키
비대칭키 암호화에서 공개키와 개인키 암호화 방식을 이용해 데이터 암호화 진행
- 공개키 : 모두에게 공개 가능한 키
- 개인키 : 나만 가지고 있어야 하는 키

<br><br>

## router 모듈화
라우터를 분리하기 위해 디렉터리 구조를 아래와 같이 작성
``` 
.
├── app.js
├── controllers
|   ├── blogs.js
|   └── users.js
└── routes
    ├── blogs.js
    └── users.js
```