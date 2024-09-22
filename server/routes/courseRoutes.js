const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  getCoursesByUser,
  getRecommendCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const checkMain = require("../middlewares/checkMain");
const appendUser = require("../middlewares/appendUser");

// 모든 course 가져오기
router.get("/", getAllCourses);

// 특정 ID의 course 가져오기
router.get("/:id", getCourseById);

// 추천 course 가져오기
router.get("/recommend", getRecommendCourses);

// 특정 user의 course 가져오기
router.get("/user/:userId", getCoursesByUser);

// course 생성하기
router.post("/", createCourse);

// 기존 course에서 생성하기
router.post("/:id", checkMain, appendUser, createCourse);

// course 수정하기
router.put("/:id", updateCourse);

// course 삭제하기
router.delete("/:id", deleteCourse);

module.exports = router;
