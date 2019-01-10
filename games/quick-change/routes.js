const express = require("express");
const router = express.Router();
const QCController = require("./controller");

// GET request to start a round of Quick Change
router.get("/", QCController.get_change);

module.exports = router;