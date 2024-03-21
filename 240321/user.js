// express 모듈 세팅
const express = require('express')
const app = express()

app.listen(3000)
app.use(express.json())

// 사용자 정보를 저장할 데이터베이스
// key = id, value = {name, age, password}
let db = new Map();

// REST API 설계 - 전체 사용자 조회
app.get('/users', (req, res) => {
  let users = {}
  db.forEach((value, key) => {
    {users[key] = value}
  })
  res.json(users);
})

// REST API 설계 - 개별 사용자 조회
app.get('/users/:id', (req, res) => {
  const {id} = req.params
  const user = db.get(id)

  // 사용자가 존재하지 않을 경우 에러 메세지
  if (!user) {
    res.json({
      message : `${id} is not registered`
    })
  } 
  // 사용자가 존재할 경우 사용자 정보 출력
  else {
    res.json(user)
  }
})

// REST API 설계 - 사용자 등록
app.post('/users', (req, res) => {
  const {id, name, age, password} = req.body
  const exists = db.get(id)

  // 사용자가 존재할 경우 에러 메세지
  if (exists) {
    res.json({
      message : `${id} already exists`
    })
  } 
  // 사용자가 존재하지 않을 경우 사용자 등록
  else {
    db.set(id, {"name" : name, "age" : age, "password" : password})
    res.send({
      message : `${id} registered successfully`
    })
  }
})

// REST API 설계 - 개별 사용자 삭제
app.delete('/users/:id', (req, res) => {
  const {id} = req.params
  const user = db.get(id)
  
  // 사용자가 존재하지 않을 경우 에러 메시지
  if (!user) {
    res.json({
      message : `${id} is not registered`
    })
  } 
  // 사용자가 존재할 경우 사용자 제거
  else {
    db.delete(id)
    res.json({
      message : `${id} is deleted`
    })
  }
})

// REST API 설계 - 전체 사용자 삭제
app.delete('/users', (req, res) => {
  // user가 1명 이상이면 전체 삭제
  if (user.size) {
    db.clear()
    res.json({
      message : "all users deleted"
    })
  }
  // 등록된 사용자가 없으면, 에러 메시지
  else {
    res.json({
      message : "no users to delete"
    })
  }
})

// REST API 설계 - 개별 사용자 수정
app.put('/users/:id', (req, res) => {
  const {id} = req.params
  const user = db.get(id)

  // 사용자가 존재하지 않을 경우 에러 메시지
  if (!user) {
    res.json({
      message : `${id} is not registered`
    })
  } 
  // 사용자가 존재할 경우 비밀번호 변경
  else {
    const oldPassword = user.password
    const newPassword = req.body.password

    user.password = newPassword
    db.set(id, user)

    res.json({
      message : "password changed successfully"
    })
  }
})