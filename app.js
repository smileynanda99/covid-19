//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    // res.render("home");
    res.send("Do well");
});

app.listen(port || process.env.PORT, () => {
    console.log(`server is running at port :${port}`);
})