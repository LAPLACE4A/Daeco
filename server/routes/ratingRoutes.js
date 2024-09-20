const express = require("express");
const router = express.Router();
const {
  getAllRatings,
  getRatingById,
  createRating,
  updateRating,
  deleteRating,
} = require("../controllers/ratingController");

// 모든 rating 가져오기
router.get("/", getAllRatings);

// 특정 ID의 rating 가져오기
router.get("/:id", getRatingById);

// rating 생성하기
router.post("/", createRating);

// rating 수정하기
router.put("/:id", updateRating);

// rating 삭제하기
router.delete("/:id", deleteRating);

module.exports = router;
