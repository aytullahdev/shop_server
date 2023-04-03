const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const { con } = require("./database/database");
const PORT = process.env.PORT || 9002;
const errorHandler = require("./middleware/errorHandle");
// Extensions

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to learner");
});
app.use("/api/product/", require("./routes/productsRoutes"));
// Error Handle
// Database connect

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log("Server is running on port " + PORT);
});
