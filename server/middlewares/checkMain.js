const Course = require("../models/Course");

const checkMain = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // 'main'인 placeID의 인덱스들 구하기
    const mainIndices = course.placeID
      .map((id, index) => (id === "main" ? index : -1))
      .filter((index) => index !== -1);

    // 기존 course의 placeList와 새로 전달된 placeList의 'main' 인덱스 값 비교
    const isMainUnchanged = mainIndices.every(
      (index) => course.placeList[index] === req.body.placeList[index]
    );

    req.isMainUnchanged = isMainUnchanged;
    req.existingCourse = course;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = checkMain;
