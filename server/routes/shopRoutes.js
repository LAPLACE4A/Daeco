const express = require("express");
const router = express.Router();
const {
  getShops,
  getShopById,
  createShop,
  modifyShop,
  deleteShop,
} = require("../controllers/shopController");

// 모든 상점 가져오기
router.get("/", getShops);

// 특정 상점 가져오기
router.get("/:id", getShopById);

// 상점 생성하기
router.post("/", createShop);

// 상점 수정하기
router.put("/:id", modifyShop);

// 상점 삭제하기
router.delete("/:id", deleteShop);

module.exports = router;
