const User = require("../models/User");

// 특정 사용자의 포인트 가져오기
exports.getPoint = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.point);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 포인트 수정하기
exports.modifyPoint = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.point = req.body.point;
    await user.save();
    res.json(user.point);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
