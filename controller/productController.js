const asyncHandler = require("express-async-handler");
const getProducts = asyncHandler(async (req, res) => {
  res.json({ message: "Product routes ok" });
});
module.exports = { getProducts };
