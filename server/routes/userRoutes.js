// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// 모든 사용자 가져오기
router.get("/", getAllUsers);

// 특정 ID의 사용자 가져오기
router.get("/:id", getUserById);

// 사용자 생성하기
router.post("/", createUser);

// 사용자 업데이트하기
router.put("/:id", updateUser);

// 사용자 삭제하기
router.delete("/:id", deleteUser);

module.exports = router;
