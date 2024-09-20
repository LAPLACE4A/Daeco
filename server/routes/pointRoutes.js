const express = require("express");
const router = express.Router();
const { getPoint, modifyPoint } = require("../controllers/pointController");

// 특정 사용자의 포인트 가져오기
router.get("/", getPoint);

// 포인트 수정하기
router.put("/", modifyPoint);

module.exports = router;
