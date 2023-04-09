const mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "password",
//   database: "shop",
// });
var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12611997",
  password: "byxZNvILpm",
  database: "sql12611997",
});
// con.connect(function (err) {
//   if (err) console.log(err);
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) console.log(err);
//     console.log("Database created");
//   });
// });
try {
  con.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected!");
    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    //var sql ="CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    // var sql = `CREATE TABLE category (
    //   id int NOT NULL AUTO_INCREMENT,
    //   gender char(5) NOT NULL,
    //   name varchar(45) NOT NULL,
    //   PRIMARY KEY (id),
    //   UNIQUE KEY id_UNIQUE (id)
    // )`;
    // var sql = `CREATE TABLE product (
    //   id int NOT NULL AUTO_INCREMENT,
    //   title varchar(100) NOT NULL,
    //   description text NOT NULL,
    //   price int NOT NULL DEFAULT '0',
    //   category_id varchar(100) NOT NULL,
    //   stock varchar(45) DEFAULT NULL,
    //   img varchar(200) DEFAULT NULL,
    //   img2 varchar(200) DEFAULT NULL,
    //   img3 varchar(200) DEFAULT NULL,
    //   note varchar(200) DEFAULT NULL,
    //   sku varchar(45) DEFAULT NULL,
    //   PRIMARY KEY (id),
    //   UNIQUE KEY id_UNIQUE (id)
    // )`;
    // con.query(sql, function (err, result, fields) {
    //   if (err) {
    //     console.log("Error");
    //     return;
    //   }
    //   console.log(result);
    // });
  });
} catch (err) {
  console.log("Database Error");
}

module.exports = { con };
