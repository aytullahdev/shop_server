const express = require("express");
const router = express.Router();
const {
  getProducts,
  getCategory,
  addCategory,
  addProduct,
  getProductsByID,
} = require("../controller/productController");

router.get("/", getProducts);
router.get("/:id", getProductsByID);
router.post("/addproduct", addProduct);
router.get("/category", getCategory);
router.post("/addcategory", addCategory);
module.exports = router;
