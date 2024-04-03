const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

router.use(express.json());

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next();
  }
  return res.status(400).json(err.array());
};

router.post(
  '/login',
  [
    body('email').notEmpty().isEmail().withMessage('email is required'),
    body('password').notEmpty().isString().withMessage('password is required)'),
    validate
  ],
  (req, res, next) => {
    const { email, password } = req.body;

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
          const token = jwt.sign({ 
            email: loginUser.email,
            name: loginUser.name,
            birth: loginUser.birth,
          }, PRIVATE_KEY);

          res.status(200).json({
            message : "login success",
            token : token
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
    body('name').notEmpty().isString().withMessage('name is string'),
    body('birth').notEmpty().isDate().withMessage('birth is date'),
    body('password').notEmpty().isString().withMessage('password is required)').isLength({ min: 4, max: 20}),
    validate
  ],
  (req, res, next) => {
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
    (req, res, next) => {
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
    (req, res, next) => {
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