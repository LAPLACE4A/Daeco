const express = require("express");
const router = express.Router();
const {
  getAllShop,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
} = require("../controllers/shopController");

// 모든 상점 가져오기
router.get("/", getAllShop);

// 특정 상점 가져오기
router.get("/:id", getShopById);

// 상점 생성하기
router.post("/", createShop);

// 상점 수정하기
router.put("/:id", updateShop);

// 상점 삭제하기
router.delete("/:id", deleteShop);

module.exports = router;
