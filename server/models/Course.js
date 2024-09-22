const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const CourseSchema = new mongoose.Schema(
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
    title: {
      type: String,
      required: true,
    },
    placeList: {
      type: Array,
      default: [],
      required: true,
    },
    placeID: {
      type: Array,
      default: [],
      required: true,
    },
    timeList: {
      type: Array,
      default: [],
      required: true,
    },
    concept: {
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

module.exports = mongoose.model("Course", CourseSchema);
