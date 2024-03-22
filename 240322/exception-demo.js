const express = require('express')
const app = express()
app.listen(3000)

const users = [
  { id : "lee00", name : "lee"},
  { id : "kim11", name : "kim"},
  { id : "park22", name : "park"},
  { id : "choi33", name : "choi"}
]

// 사용자 개별 조회
app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // users 배열 안에 있는 객체 중, id 값이 params.id랑 같은 객체
  let user = users.find(u => u.id == id)

  // users 배열 안에 id를 가진 사용자가 있다면, 객체 반환
  if (user) {
    res.json(user)
  }
  // users 배열 안에 id를 가진 사용자가 없다면, 예외 처리
  else {
    res.status(404).json({
      message : `${id} is not registered`
    })
  }
})