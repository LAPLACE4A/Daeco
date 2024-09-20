const Course = require("../models/Course");

// 모든 코스 가져오기
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 특정 ID의 코스 가져오기
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 특정 사용자의 코스 가져오기 (활용해서 미들웨어, 레이팅, 코스, 유저 연결하기-> 레이팅 남기지 않은 코스id를 보내주는 api 구성)
exports.getCoursesByUser = async (req, res) => {
  try {
    const courses = await Course.find({ userId: req.params.userId });
    res.json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 코스 생성하기 (사용자 ID 필요)
exports.createCourse = async (req, res) => {
  const { title, placeList, placeID, timeList, concept, content, userId } =
    req.body;

  try {
    const course = new Course({
      title,
      placeList,
      placeID,
      timeList,
      concept,
      content,
      userId,
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 코스 수정하기(placeID의 main인 요소인 index의 placeList가 변하지 않았다면 수정 불가) 안됐네
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    course.title = req.body.title;
    course.placeList = req.body.placeList;
    course.placeID = req.body.placeID;
    course.timeList = req.body.timeList;
    course.concept = req.body.concept;
    course.content = req.body.content;
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 코스 삭제하기
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
