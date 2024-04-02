const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, validationResult } = require('express-validator');

router.use(express.json());

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
  next();
};

router.post(
  '/login',
  [
    body('email').notEmpty().isEmail().withMessage('email is required'),
    body('password').notEmpty().withMessage('password is required)'),
    validate
  ],
  (req, res) => {
    const {email, password} = req.body;

    const sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(
      sql, email,
      function(err, results) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }

        let loginUser = results[0];
        if (loginUser && loginUser.password == password) {
          res.status(200).json({
            message : "login success"
          });
        }
        else {
          res.status(404).json({
            message : "email or password is incorrect"
          });
        }
      }
    );
});

router.post(
  '/signup', 
  [
    body('email').notEmpty().isEmail().withMessage('email is required'),
    body('name').isString().withMessage('name is string'),
    body('birth').isDate().withMessage('birth is date'),
    body('password').notEmpty().withMessage('password is required)').isLength({ min: 4, max: 20}),
    validate
  ],
  (req, res) => {
    const {email, name, birth, password} = req.body;

    const sql = `INSERT INTO users (email, name, birth, password) VALUES (?, ?, ?, ?)`;
    const values = [email, name, birth, password];
    conn.query(
      sql, values,
      function(err, results) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }

        res.status(201).json(results);
      }
    );
  }
);

router
  .route('/users')
  .get(
    [
      body('email').notEmpty().isEmail().withMessage('email is required'),
      validate
    ],
    (req, res) => {
    const {email} = req.body;

    const sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(
      sql, email,
      function(err, results) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }

        if (results.length) {
          res.status(200).json(results);
        }
        else {
          res.status(404).json({
            message : `${email} is not registered`
          });
        }
      }
    );
  })

  .delete(
    [
      body('email').notEmpty().isEmail().withMessage('email is required'),
      validate
    ],
    (req, res) => {
    const { email } = req.body;

    const sql = `DELETE FROM users WHERE email = ?`;
    conn.query(
      sql, email,
      function(err, results) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }

        if (!results.affectedRows) {
          return res.status(400).end();
        } else {
          res.status(200).json(results);
        }
      }
    );
  })

module.exports = router;