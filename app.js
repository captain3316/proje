const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("./data/dbManager");
const routers = require("./routers/appRouters");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("node_modules"));
app.set("view engine", "ejs");

app.use(routers);


app.listen(3000);