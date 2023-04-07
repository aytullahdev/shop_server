const asyncHandler = require("express-async-handler");
const { con } = require("../database/database");
// Product ----------
const getProducts = asyncHandler(async (req, res) => {
  var sql = "SELECT * FROM product";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});
const getProductsByID = asyncHandler(async (req, res) => {
  var sql = `SELECT * FROM product where id=${req.params.id}`;
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result[0]);
  });
});

const addProduct = asyncHandler((req, res) => {
  const { title, price, description, category_id } = req.body;
  // img,size,description -> JSON,
  // || !img || !c_id || !price || !stock || !size
  if (!title || !price || !category_id) {
    res.status(500);
    throw new Error("Please Insert All Data");
  }
  var sql = `INSERT INTO product (title,price,description,category_id) VALUES ('${title}','${price}','${description}','${category_id}');`;
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});
// Category -------------
const getCategory = asyncHandler(async (req, res) => {
  var sql = "SELECT * FROM category";
  con.query(sql, function (err, result, fields) {
    if (err) {
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});
const addCategory = asyncHandler((req, res) => {
  const { name, gender } = req.body;
  if (!name || !gender) {
    res.status(500);
    throw new Error("Please Insert All Data");
  }
  var sql = `INSERT INTO category (name,gender) VALUES ('${name}','${gender}');`;
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});
module.exports = {
  getProducts,
  getCategory,
  addCategory,
  addProduct,
  getProductsByID,
};
