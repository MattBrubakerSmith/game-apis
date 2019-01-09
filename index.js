const express = require("express");
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

app.use("/games/dice", require("./games/dice/routes"));

module.exports = app;