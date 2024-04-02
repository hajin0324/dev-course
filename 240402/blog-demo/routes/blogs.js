const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, param, validationResult } = require('express-validator');

router.use(express.json());

const validate = (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
  next();
};

router
  .route('/')
  .get(
    [
      body('userId').notEmpty().isInt().withMessage('userId is number'),
      validate
    ],
    (req, res) => {
      let { userId } = req.body;

      let sql = `SELECT * FROM blogs WHERE user_id = ?`;
      conn.query(sql, userId,
        function (err,results) {
          if (err) {
            console.log(err);
            return res.status(400).end();
          }

          if (results.length) {
            res.status(200).json(results);
          } else {
            notFoundBlog(res);
          }
        }
      );
  })
  .post(
    [
      body('userId').notEmpty().isInt().withMessage('userId is number'),
      body('title').notEmpty().isString().withMessage('title is string').isLength({ min: 4, max: 20 }),
      validate
    ],
    (req, res) => {
      const { title, userId } = req.body;

      const sql = `INSERT INTO blogs (title, user_id) VALUES (?, ?)`;
      const values = [title, userId] ;
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
  )
  
router
  .route('/:id')
  .get(
    [
      param('id').notEmpty().isInt().withMessage('blog id required'),
      validate
    ],
    (req, res) => {
      let { id } = req.params;
      id = parseInt(id);

      const sql = `SELECT * FROM blogs WHERE id = ?`;
      conn.query(sql, id,
        function (err,results) {
          if (err) {
            console.log(err);
            return res.status(400).end();
          }

          if (results.length) {
            res.status(200).json(results);
          } else {
            notFoundBlog(res);
          }
        }
      );
  })
  .put(
    [
      param('id').notEmpty().isInt().withMessage('blog id required'),
      body('title').notEmpty().isString().withMessage('blog title required').isLength({ min: 4, max: 20 }),
      validate
    ],
    (req, res) => {
      let {id} = req.params;
      id = parseInt(id);
      let { name } = req.body;

      const sql = `UPDATE blogs SET name = ? WHERE id = ?`;
      const values = [title, id];
      conn.query(sql, values,
        function (err,results) {
          if (err) {
            console.log(err);
            return res.status(400).end();
          }

          if (results.affectedRows == 0) {
            return res.status(400).end();
          } else {
            res.status(200).json(results);
          }
        }
      );
  })
  .delete(
    [
      body('id').notEmpty().isInt().withMessage('blog id required'),
      validate
    ],
    (req, res) => {
      let {idx} = req.params;
      idx = parseInt(idx);

      const sql = `DELETE FROM blogs WHERE id = ?`;
      conn.query(
        sql, id,
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