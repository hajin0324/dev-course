## express-validator

express-validator는 유입데이터가 특정 형식을 따르는지 확인하는 유효성 검사 모듈

<br>

### Install
``` bash
npm install express-validator
```

<br>

### Adding a validator
``` javascript
const express = require('express');
const { query, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
});

app.listen(3000);
```

<br>

### error
``` json
{
  "errors": [
    {
      "location": "query",
      "msg": "Invalid value",
      "path": "person",
      "type": "field"
    }
  ]
}
```

<br>


## 미들웨어

클라이언트에게 요청이 오면 응답하기 위해 목적에 맞게 처리해주는 함수

<br>

### 오류 처리 미들웨어
``` javascript
const validate = (req, res, next) => {
  const err = validationResult(req)

  if (!err.isEmpty()) {
    return res.status(400).json(err.array())
  }
  next()
}
```
- `req` : 미들웨어 함수에 대한 HTTP 요청 인수

- `res` : 미들웨어 함수에 대한 HTTP 응답 인수 

- `next` : 미들웨어 함수에 대한 콜백 인수, 액션을 다음 미들웨어에게 전달하는 함수