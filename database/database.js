const mysql = require("mysql");
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "mydb",
});
// con.connect(function (err) {
//     if (err) console.log(err);
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) console.log(err);
//       console.log("Database created");
//     });
//   });
con.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  //var sql ="CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  var sql = "SELECT * FROM customers";
  con.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sucessfull");
    console.log(result);
  });
});
module.exports = { con };
