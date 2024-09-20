const shop = require("../models/shopModel");

// 모든 상점 가져오기
exports.getShops = async (req, res) => {
  try {
    const shops = await shop.find();
    res.json(shops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 특정 상점 가져오기
exports.getShop = async (req, res) => {
  try {
    const shop = await shop.findById(req.params.id);
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }
    res.json(shop);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 상점 생성하기
exports.createShop = async (req, res) => {
  const { name, location, description, image } = req.body;
  try {
    const newShop = new shop({
      name,
      location,
      description,
      image,
    });
    await newShop.save();
    res.status(201).json(newShop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 상점 수정하기
exports.modifyShop = async (req, res) => {
  try {
    const shop = await shop.findById(req.params.id);
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }
    shop.name = req.body.name;
    shop.location = req.body.location;
    shop.description = req.body.description;
    shop.image = req.body.image;
    await shop.save();
    res.json(shop);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 상점 삭제하기
exports.deleteShop = async (req, res) => {
  try {
    const shop = await shop.findById(req.params.id);
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }
    await shop.remove();
    res.json({ message: "Shop deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
