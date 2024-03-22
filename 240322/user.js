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

  // 등록된 사용자가 1명 이상이면 전체 사용자 정보 출력
  if (db.size) {
    db.forEach((value, key) => {
      {users[key] = value}
    })
    res.json(users);
  }
  // 등록된 사용자가 없으면, 에러 메시지
  else {
    res.status(404).json({
      message : "no users to view"
    })
  }
})

// REST API 설계 - 개별 사용자 조회
app.get('/users/:id', (req, res) => {
  const {id} = req.params
  const user = db.get(id)

  // 사용자가 존재할 경우 사용자 정보 출력
  if (user) {
    res.json(user)
  } 
  // 사용자가 존재하지 않을 경우 에러 메세지
  else {
    res.status(404).json({
      message : `${id} is not registered`
    })
  }
})

// REST API 설계 - 사용자 등록
app.post('/users', (req, res) => {
  const {id, name, age, password} = req.body
  const exists = db.get(id)

  // 사용자가 존재하지 않을 경우 사용자 등록
  if (!exists) {
    db.set(id, {"name" : name, "age" : age, "password" : password})
    res.send({
      message : `${id} registered successfully`
    })
  }
  // body에 id 값이 넘어오지 않았을 경우
  else if (!id) {
    res.status(400).json({
      message : "request value is invalid"
    })
  }
  // 사용자가 존재할 경우 에러 메세지
  else {
    res.status(404).json({
      message : `${id} already exists`
    })
  }
})

// REST API 설계 - 개별 사용자 삭제
app.delete('/users/:id', (req, res) => {
  const {id} = req.params
  const user = db.get(id)
  
  // 사용자가 존재할 경우 사용자 제거
  if (user) {
    db.delete(id)
    res.json({
      message : `${id} is deleted`
    })
  } 
  // 사용자가 존재하지 않을 경우 에러 메시지
  else {
    res.status(404).json({
      message : `${id} is not registered`
    })
  }
})

// REST API 설계 - 전체 사용자 삭제
app.delete('/users', (req, res) => {
  // 등록된 사용자가 1명 이상이면 전체 삭제
  if (user.size) {
    db.clear()
    res.json({
      message : "all users deleted"
    })
  }
  // 등록된 사용자가 없으면, 에러 메시지
  else {
    res.status(404).json({
      message : "no users to delete"
    })
  }
})

// REST API 설계 - 개별 사용자 수정
app.put('/users/:id', (req, res) => {
  const {id} = req.params
  const user = db.get(id)
  
  // 사용자가 존재할 경우 비밀번호 변경
  if (user) {
    const oldPassword = user.password
    const newPassword = req.body.password

    user.password = newPassword
    db.set(id, user)

    res.json({
      message : "password changed successfully"
    })
  } 
  // 사용자가 존재하지 않을 경우 에러 메시지
  else {
    res.status(404).json({
      message : `${id} is not registered`
    })
  }
})