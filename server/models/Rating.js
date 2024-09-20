const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const RatingSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // _id 필드를 uuidv4로 설정
    },
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    courseId: {
      type: String,
      ref: "Course",
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    hashtag: {
      type: Array,
      default: [],
      required: true,
    },
    weather: {
      type: String,
      default: "",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rating", RatingSchema);
