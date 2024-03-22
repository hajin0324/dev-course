const express = require('express')
const app = express()

app.listen(3000) 
app.use(express.json())

// 사용자 정보를 저장할 데이터베이스
// key = id, value = {name, age, password}
let db = new Map();

// 로그인
app.post('/login', (req, res) => {
  
})

// 회원가입
app.post('/signup', (req, res) => {
  const {id, name, age, password} = req.body
  const exists = db.get(id)

  // 같은 id가 존재하지 않을 경우 사용자 등록
  if (id && !exists) {
    db.set(id, {"name" : name, "age" : age, "password" : password})
    res.status(201).send({
      message : `${id} registered successfully`
    })
  }
  // id 값이 비어있을 경우 에러 메시지
  else if (!id) {
    res.status(400).json({
      message : "request value is invalid"
    })
  }
  // 같은 id 존재할 경우 에러 메세지
  else {
    res.status(404).json({
      message : `${id} already exists`
    })
  }
})

app
  .route('/users/:id')

  // 회원 개별 조회
  .get(function (req, res) {
    const {id} = req.params
    const user = db.get(id)
  
    // 해당 id를 가진 회원이 존재하는 경우 회원 정보 반환
    if (user) {
      res.status(200).json({
        "id" : user.id,
        "name" : user.name,
        "age" : user.age
      })
    }
    // 해당 id를 가진 회원이 존재하지 않는 경우 에러 메시지
    else {
      res.status(404).json({
        message : `${id} is not registered`
      })
    }
  })

  // 회원 개별 탈퇴
  .delete(function (req, res) {
    const {id} = req.params
    const user = db.get(id)
  
    // 해당 id를 가진 회원이 존재하는 경우 회원 정보 삭제
    if (user) {
      db.delete(id)
  
      res.status(200).json({
        message : `${id} is deleted`
      })
    }
    // 해당 id를 가진 회원이 존재하지 않는 경우 에러 메시지
    else {
      res.status(404).json({
        message : `${id} is not registered`
      })
    }
  })