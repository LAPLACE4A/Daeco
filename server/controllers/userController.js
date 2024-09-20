const User = require("../models/User");
const Course = require("../models/Course");

//유저 생성하기
exports.createUser = async (req, res) => {
  const { name, email, profile_picture, gender, age, mbti, role, point } =
    req.body;

  try {
    const user = new User({
      name,
      email,
      profile_picture,
      gender,
      age,
      mbti,
      role,
      point,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//모든 유저 가져오기
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//특정 유저 가져오기
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//유저 수정하기
exports.modifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.profile_picture = req.body.profile;
    user.gender = req.body.gender;
    user.age = req.body.age;
    user.mbti = req.body.mbti;
    user.role = req.body.role;
    user.point = req.body.point;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//유저 업데이트하기
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.profile_picture = req.body.profile_picture || user.profile_picture;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//유저 삭제하기
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
