const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes/index");
const cors = require("cors");
const connectDB = require("./config/db");

//DB connection
connectDB();

//Basic cfg

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", routes);
app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});

app.get("/", (req, res) => {});
