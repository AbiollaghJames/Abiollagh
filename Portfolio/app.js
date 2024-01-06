// Imports
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Environment variable
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Handling form submission
app.post("/submit-form", (req, res) => {
    const { name, email, message } = req.body;

    // Creating nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "abiollajames@gmail.com",
            pass: process.env.PASS
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: "abiollajames@gmail.com",
        subject: "Rely from Abiollagh James",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Sending Email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error!");
        } else {
            console.log("Email sent: " + info.resposne);
            res.status(200).send("Email sent successfully");
        }
    });
});

// Listening port
app.listen(port, host, () => {
    console.info(`Server running on port ${port} and host ${host}`);
});
