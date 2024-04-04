const conn = require('../mariadb');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(
    sql, email,
    function (err, results) {
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
        }, process.env.PRIVATE_KEY, {
          expiresIn: '30m',
          issuer: "jini"
        });

        res.cookie("token", token, {
          httpOnly: true
        })

        res.status(200).json({
          message: "login success",
        });
      }
      else {
        res.status(403).json({
          message: "email or password is incorrect"
        });
      }
    }
  );
};

const signUp = async (req, res, next) => {
  const { email, name, birth, password } = req.body;

  const sql = `INSERT INTO users (email, name, birth, password) VALUES (?, ?, ?, ?)`;
  const values = [email, name, birth, password];
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

const inquiryUser = async (req, res, next) => {
  const { email } = req.body;

  const sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(
    sql, email,
    function (err, results) {
      if (err) {
        console.log(err);
        return res.status(400).end();
      }

      if (results.length) {
        res.status(200).json(results);
      }
      else {
        res.status(404).json({
          message: `${email} is not registered`
        });
      }
    }
  );
};

const deleteUser = async (req, res, next) => {
  const { email } = req.body;

  const sql = `DELETE FROM users WHERE email = ?`;
  conn.query(
    sql, email,
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
}

module.exports = {
  signIn,
  signUp,
  inquiryUser,
  deleteUser
};