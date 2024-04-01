### mysql 모듈화
---

mariadb.js
``` javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password : 'root',
  database: 'Blog',
  dateStrings : true
});

module.exports = connection
```

<br>

users.js
``` javascript
const express = require('express')
const router = express.Router()

const conn = require('../mariadb')

// SELECT query
conn.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
  }
);
```

<br><br>
### 회원 API 설계
---

<br>

🏷️ 로그인 : SELECT - POST /login

- req : body(email, password)

- res 200 : 'login success' -> 메인 페이지

<br>

🏷️ 회원 가입 : INSERT - POST /signup

- req : body(email, name, pwd, contact)

- res 201 : user 객체 반환  -> 로그인 페이지

<br>

🏷️ 회원 정보 조회 : SELECT - GET /users/

- req : body(email)

- res 200 : user 객체 반환

<br>

🏷️ 회원 탈퇴 : DELETE - DELETE /users

- req : body(email)

- res 200 : 결과 반환 → 메인 페이지

<br><br>

### 블로그 API 설계
---

<br>

🏷️ 채널 생성 : INSERT - POST /channels

- req : body(title, user_id) cf. userId는 body X header에 숨겨서.. Token

- res 201 : user의 채널 리스트 반환 -> 채널 관리 페이지

<br>

🏷️ 채널 수정 : UPDATE - PUT /channels/:id

- req : URL(id), body(title)
- res 200 : 채널 수정 결과 반환

<br>

🏷️ 채널 삭제 : DELETE - /channels/:id

- req : URL(id)
- res 200 : 삭제 결과 반환 -> 메인 페이지

<br>

🏷️ 회원 채널 조회 : GET - /channels

- req : body(user_id)
- res 200 : 채널 전체 데이터 list, json array

<br>

🏷️ 채널 개별 조회 : GET - /channels/:id

- req : URL(id)
- res 200 : 채널 개별 데이터 반환