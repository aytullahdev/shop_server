const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const { con } = require("./database/database");
const PORT = process.env.PORT || 9003;
const errorHandler = require("./middleware/errorHandle");
const fileUpload = require("express-fileupload");
// Extensions

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to learner");
});
app.use("/api/product/", require("./routes/productsRoutes"));
app.use("/api/file/", require("./routes/fileUploadRoute"));
// Error Handle
// Database connect

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log("Server is running on port " + PORT);
});
