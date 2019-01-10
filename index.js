const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
const logger = require("morgan");

// Express
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());

// HTTP
const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Connected to the HTTP server!");
})

// MongoDB
const db = require("./data/config").games;
mongoose.Promise = require("bluebird");
mongoose.connect(db, {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true
})
.then(() => console.log("MongoDB Connected!"))
.catch((err) => console.error(err));

app.use("/games/dice", require("./games/dice/routes"));
app.use("/games/cards", require("./games/cards/routes"));
app.use("/games/tic-tac-toe", require("./games/tic-tac-toe/routes"));
app.use("/games/rps", require("./games/rock-paper-scissors/routes"));

module.exports = app;