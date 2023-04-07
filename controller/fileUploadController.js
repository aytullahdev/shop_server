const asyncHandler = require("express-async-handler");
const fs = require("fs");
const fileUpload = asyncHandler((req, res) => {
  if (!req.files) {
    res.status(500);
    throw new Error("Please Add File");
  }

  let sampleFile = req.files.sampleFile;
  let uploadPath = __dirname + "/uploads/img/" + sampleFile.name;

  if (fs.existsSync(uploadPath)) {
    res.status(500);
    throw new Error("Please Change the file name");
  }

  sampleFile.mv(uploadPath, (err) => {
    if (err) {
      res.status(500);
      res.json({ message: "File can't uploaded" });
    }
  });
  res.json({ id: 1, path: uploadPath });
});
module.exports = { fileUpload };
