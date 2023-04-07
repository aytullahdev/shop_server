const express = require("express");
const { fileUpload } = require("../controller/fileUploadController");
const router = express.Router();
router.post("/upload/", fileUpload);
module.exports = router;
