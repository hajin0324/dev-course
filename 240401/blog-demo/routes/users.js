const express = require('express')
const router = express.Router()
const conn = require('../mariadb')

router.use(express.json())

router.post('/login', (req, res) => {
  const {email, password} = req.body

  const sql = `SELECT * FROM users WHERE email = ?`
  conn.query(
    sql, email,
    function(err, results) {
      let loginUser = results[0]

      if (loginUser && loginUser.password == password) {
        res.status(200).json({
          message : "login success"
        })
      }
      else {
        res.status(404).json({
          message : "email or password is incorrect"
        })
      }
    }
  )
})

router.post('/signup', (req, res) => {
  if (req.body != {}) {
    const {email, name, birth, password} = req.body

    const sql = `INSERT INTO users (email, name, birth, password) VALUES (?, ?, ?, ?)`
    const values = [email, name, birth, password] 
    conn.query(
      sql, values,
      function(err, results) {
          res.status(201).json(results)
      }
    )
  }
  else if (!id) {
    res.status(400).json({
      message : "request value is invalid"
    })
  }
})

router
  .route('/users')

  .get(function (req, res) {
    const {email} = req.body

    const sql = `SELECT * FROM users WHERE email = ?`
    conn.query(
      sql, email,
      function(err, results) {
    
        if (results.length) {
          res.status(200).json(results)
        }
        else {
          res.status(404).json({
            message : `${email} is not registered`
          })
        }
      }
    );
  })

  .delete(function (req, res) {
    const {email} = req.body

    const sql = `DELETE FROM users WHERE email = ?`
    conn.query(
      sql, email,
      function(err, results) {
        res.status(200).json(results)
      }
    )
  })

module.exports = router