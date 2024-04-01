const express = require('express')
const router = express.Router()
const conn = require('../mariadb')

router.use(express.json())

router
  .route('/')
  .get((req, res) => {
    let {userId} = req.body

    let sql = `SELECT * FROM blogs WHERE user_id = ?`
    if (userId) {
      conn.query(sql, userId,
        function (err,results) {
          if (results[0].length) {
            res.status(200).json(results)
          } else {
            notFoundChannel(res)
          }
        }
      )
    } 
    else {
      res.status(400).end()
    }
  })
  .post((req, res) => {
    const {title, userId} = req.body
    if (title && userId) {
      const sql = `INSERT INTO users (title, user_id) VALUES (?, ?)`
      const values = [title, userId] 
      conn.query(
        sql, values,
        function(err, results) {
            res.status(201).json(results)
        }
      )
    }
    else {
      res.status(400).json({
        mesage : "request value is invalid"
      })
    }
  })
  
router
  .route('/:id')
  .get((req, res) => {
    let {idx} = req.params
    idx = parseInt(idx)

    const sql = `SELECT * FROM blogs WHERE id = ?`
    conn.query(sql, id,
      function (err,results) {
        if (results[0].length) {
          res.status(200).json(results)          
        }
        else {
          notFoundBlog(res)
        }
      }
    )
  })
  .put((req, res) => {
    let {idx} = req.params
    idx = parseInt(idx)

    const blog = db.get(idx)
    const prev = blog.blogTitle

    if (blog) {
      blog.blogTitle = req.body.blogTitle
      db.set(idx, blog)

      res.status(200).json({
        message : `blog title changed successfully`
      })
    }
    else {
      notFoundBlog()
    }
  })
  .delete((req, res) => {
    let {idx} = req.params
    idx = parseInt(idx)

    const blog = db.get(idx)
    if (blog) {
      db.delete(idx)
      res.status(200).json({
        message : `${blog.blogTitle} is deleted`
      })
    }
    else {
      notFoundBlog()
    }
  })

function notFoundBlog(res) {
  res.status(404).json({
    message : `blog does not exist`
  })
}
module.exports = router