const express = require('express')
const app = express()

app.listen(3000) 
app.use(express.json())

let db = new Map();
let idx = 1

app
  .route('/blogs')
  // 블로그 전체 조회
  .get((req, res) => {
    // blog가 1개 이상 있는 경우 정보 출력
    if (db.size) {
      let blogs = []

      db.forEach(blog => {
        blogs.push(blog)
      })

      res.status(200).json(blogs)
    }
    // blog가 하나도 없는 경우
    else {
      res.status(404).json({
        message : "blog is not existed"
      })
    }

  })
  // 블로그 개별 생성
  .post((req, res) => {
    // blogTitle 값이 들어왔는지 확인
    if (req.body.blogTitle) {
      db.set(idx++, req.body)

      res.status(201).json({
        message : `${db.get(idx - 1).blogTitle} created successfully`
      })
    }
    // blogTitle 값이 비어있을 경우 에러 메시지
    else {
      res.status(400).json({
        mesage : "request value is invalid"
      })
    }
  })
  
app
  .route('/blogs/:idx')
  // 블로그 개별 조회
  .get((req, res) => {
    let {idx} = req.params
    idx = parseInt(idx)

    const blog = db.get(idx)
    // 해당 idx 블로그가 존재한다면 블로그 정보 출력
    if (blog) {
      res.status(200).json(blog)
    }
    // 만약 해당 idx 블로그가 존재하지 않으면 에러 메시지
    else {
      res.status(404).json({
        message : `${idx} is not existed`
      })
    }
  })
  // 블로그 개별 수정
  .put((req, res) => {
    let {idx} = req.params
    idx = parseInt(idx)

    const blog = db.get(idx)
    const prev = blog.blogTitle

    // 해당 idx 블로그가 존재한다면 블로그 이름 수정
    if (blog) {
      blog.blogTitle = req.body.blogTitle
      db.set(idx, blog)

      res.status(200).json({
        message : `blog title changed successfully`
      })
    }
    // 만약 해당 idx 블로그가 존재하지 않으면 에러 메시지
    else {
      res.status(404).json({
        message : `${idx} is not existed`
      })
    }
  })
  // 블로그 개별 삭제
  .delete((req, res) => {
    let {idx} = req.params
    idx = parseInt(idx)

    const blog = db.get(idx)
    // 해당 idx 블로그가 존재한다면 블로그 삭제
    if (blog) {
      db.delete(idx)
      res.status(200).json({
        message : `${blog.blogTitle} is deleted`
      })
    }
    // 만약 해당 idx 블로그가 존재하지 않으면 에러 메시지
    else {
      res.status(404).json({
        message : `${idx} is not existed`
      })
    }
  })