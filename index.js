const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

// Express
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());

// MongoDB
const db = require("./data/config").games;
mongoose.Promise = require("bluebird");
mongoose.connect(db, {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true
})
.then(() => console.log("MongoDB Connected!"))
.catch((err) => console.error(err));

// EJS Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes"));
app.use("/games/dice", require("./games/dice/routes"));
app.use("/games/cards", require("./games/cards/routes"));
app.use("/games/tic-tac-toe", require("./games/tic-tac-toe/routes"));
app.use("/games/rps", require("./games/rock-paper-scissors/routes"));
app.use("/games/qc", require("./games/quick-change/routes"));

module.exports = app;