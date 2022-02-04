require("./config/config");
require("./models/db");
const dotenv = require("dotenv");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const rtsIndex = require("./routes/index.router");
const app = express();
dotenv.config();

//middleware

app.use(bodyParser.json());
app.use(cors());
app.use("/api", rtsIndex);

// '/api/register'
console.log(process.env.PORT);
app.listen(process.env.PORT, () =>
  console.log(`server started at port : ${process.env.PORT}`)
);
