const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// 모든 행사 가져오기
router.get("/", eventController.getAllEvents);
// 특정 행사 가져오기
router.get("/:id", eventController.getEventById);

module.exports = router;
