const asyncHandler = require("express-async-handler");
const fs = require("fs");

var ImageKit = require("imagekit");
var imagekit = new ImageKit({
  publicKey: "public_/HyBD49VaRhMfei0U4gopRBPdrs=",
  privateKey: "private_eFNz2PDmGUr4SNd7TO1EP7OYk0k=",
  urlEndpoint: "https://ik.imagekit.io/ql0cuq4dm/shop/",
});
const fileUpload = asyncHandler(async (req, res) => {
  if (!req.files) {
    res.status(500);
    throw new Error("Please Add File");
  }
  let sampleFile = req.files.sampleFile;
  if (req.files) {
    imagekit.upload(
      {
        file: sampleFile.data,
        fileName: sampleFile.name,
      },
      function (err, response) {
        if (err) {
          return res.status(500).json({
            message: "An error occured during file upload. Please try again.",
          });
        }

        res.json(response);
      }
    );
  }
  //   let sampleFile = req.files.sampleFile;
  //   let uploadPath = __dirname + "/uploads/img/" + sampleFile.name;

  //   if (fs.existsSync(uploadPath)) {
  //     res.status(500);
  //     throw new Error("Please Change the file name");
  //   }

  //   sampleFile.mv(uploadPath, (err) => {
  //     if (err) {
  //       res.status(500);
  //       res.json({ message: "File can't uploaded" });
  //     }
  //   });

  //   const fileBuffer = await fsPromises.readFile(uploadPath);

  //   var uploadResponse = await imagekit.upload({
  //     file: fileBuffer, // It accepts remote URL, base_64 string or file buffer
  //     fileName: sampleFile.name, // required

  //     isPrivateFile: false,
  //   });
  //   console.log(uploadResponse);
});
module.exports = { fileUpload };
