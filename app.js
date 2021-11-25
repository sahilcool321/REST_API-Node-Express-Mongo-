const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require ('cors')

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
const PORT = 5000;

const connectDB = require("./config/db");
//load config
dotenv.config({ path: "./config/config.env" });

connectDB();

// Routes
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
