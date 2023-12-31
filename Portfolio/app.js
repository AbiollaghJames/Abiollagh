// Imports
const express = require("express");

const app = express();

// Environment variable
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("img", express.static(__dirname + "public/img"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");



// Serving HTML pages
app.get("/", (req, res) => {
    res.render("index");
});

// Listening port
app.listen(port, host, () => {
    console.info(`Server running on port ${port} and host ${host}`);
});
