// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'root',
  database: 'Blog',
  dateStrings : true
});

// A simple SELECT query
connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    let {id, email, name, birth, password, created_at} = results[0];

    console.log(id);
    console.log(email);
    console.log(name);
    console.log(birth);
    console.log(password);
    console.log(created_at);  

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);