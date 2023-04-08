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
const updateProduct = asyncHandler((req, res) => {
  const {
    id,
    title,
    price,
    description,
    category_id,
    img,
    stock,
    img2,
    img3,
    note,
    sku,
  } = req.body;
  // img,size,description -> JSON,
  // || !img || !c_id || !price || !stock || !size
  if (!title || !price || !category_id || !id || !img || !stock) {
    res.status(500);
    throw new Error("Please Insert All Data");
  }

  var sql = `UPDATE product SET title='${title}',price='${price}',description='${description}',category_id='${category_id}', img='${img}', stock='${stock}', img2='${img2}', img3='${img3}', note='${note}',sku='${sku}' where id=${id};`;
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});
const deleteProduct = asyncHandler((req, res) => {
  const { id } = req.body;
  // img,size,description -> JSON,
  // || !img || !c_id || !price || !stock || !size
  if (!id) {
    res.status(500);
    throw new Error("Please Insert Valid ID");
  }

  var sql = `DELETE FROM product  WHERE id=${id};`;
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json(result);
  });
});

const addProduct = asyncHandler((req, res) => {
  const {
    title,
    price,
    description,
    category_id,
    img,
    stock,
    img2,
    img3,
    note,
    sku,
  } = req.body;

  // img,size,description -> JSON,
  // || !img || !c_id || !price || !stock || !size
  if (!title || !price || !category_id || !img || !stock) {
    res.status(500);
    throw new Error("Please Insert All Data");
  }
  var sql = `INSERT INTO product (title,price,description,category_id,img,stock,img2,img3,note,sku) VALUES ('${title}','${price}','${description}','${category_id}','${img}','${stock}','${img2}','${img3}','${note}','${sku}');`;

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
    res.json({ message: "Category is added", data: result });
  });
});
const deletecategory = asyncHandler((req, res) => {
  const { id } = req.body;
  // img,size,description -> JSON,
  // || !img || !c_id || !price || !stock || !size
  if (!id) {
    res.status(500);
    throw new Error("Please Insert Valid ID");
  }

  var sql = `DELETE FROM category  WHERE id=${id};`;
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.sqlMessage });
    }
    res.json({ message: "Category is Deleted", data: result });
  });
});
module.exports = {
  getProducts,
  getCategory,
  addCategory,
  addProduct,
  getProductsByID,
  updateProduct,
  deleteProduct,
  deletecategory,
};
