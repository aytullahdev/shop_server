const express = require("express");
const router = express.Router();
const {
  getProducts,
  getCategory,
  addCategory,
  addProduct,
  getProductsByID,
  updateProduct,
  deleteProduct,
  deletecategory,
} = require("../controller/productController");

router.get("/", getProducts);
router.post("/addproduct/", addProduct);
router.post("/addcategory", addCategory);
router.get("/category/", getCategory);
router.post("/addcategory/", addCategory);
router.post("/update", updateProduct);
router.delete("/delete", deleteProduct);
router.delete("/deletecategory", deletecategory);
router.get("/:id", getProductsByID);
module.exports = router;
