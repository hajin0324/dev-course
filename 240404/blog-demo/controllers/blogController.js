const conn = require('../mariadb');

const inquiryUserBlog = async (req, res, next) => {
  let { userId } = req.body;

  let sql = `SELECT * FROM blogs WHERE user_id = ?`;
  conn.query(sql, userId,
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(400).end();
      }

      if (results.length) {
        res.status(200).json(results);
      } else {
        res.status(400).end();
      }
    }
  );
};

const createBlog = async (req, res, next) => {
  const { title, userId } = req.body;

  const sql = `INSERT INTO blogs (title, user_id) VALUES (?, ?)`;
  const values = [title, userId];
  conn.query(
    sql, values,
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(400).end();
      }
      res.status(201).json(results);
    }
  );
};
  
const inquiryBlog = async (req, res, next) => {
  let { id } = req.params;
  id = parseInt(id);

  const sql = `SELECT * FROM blogs WHERE id = ?`;
  conn.query(sql, id,
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(400).end();
      }

      if (results.length) {
        res.status(200).json(results);
      } else {
        res.status(400).end();
      }
    }
  );
};

const updateBlog = async (req, res, next) => {
  let { id } = req.params;
  id = parseInt(id);
  let { name } = req.body;

  const sql = `UPDATE blogs SET name = ? WHERE id = ?`;
  const values = [title, id];
  conn.query(sql, values,
    function (err, results) {
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
};

const deleteBlog = async (req, res, next) => {
  let { idx } = req.params;
  idx = parseInt(idx);

  const sql = `DELETE FROM blogs WHERE id = ?`;
  conn.query(
    sql, id,
    function (err, results) {
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
};

module.exports = {
  inquiryUserBlog,
  createBlog,
  inquiryBlog,
  updateBlog,
  deleteBlog
};