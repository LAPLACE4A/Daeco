const Rating = require("../models/Rating");

// 모든 rating 가져오기
exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// id로 rating 찾기
exports.getRatingById = async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.json(rating);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// rating 생성하기
exports.createRating = async (req, res) => {
  const { userId, courseId, stars, hashtag, weather, content } = req.body;
  try {
    const rating = new Rating({
      userId,
      courseId,
      stars,
      hashtag,
      weather,
      content,
    });
    await rating.save();
    res.status(201).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// rating 수정하기
exports.updateRating = async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    rating.stars = req.body.stars;
    rating.hashtag = req.body.hashtag;
    rating.weather = req.body.weather;
    rating.content = req.body.content;
    await rating.save();
    res.json(rating);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// rating 삭제하기
exports.deleteRating = async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    await rating.remove();
    res.json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
