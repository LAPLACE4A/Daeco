const Course = require("../models/Course");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

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

// 추천 코스 가져오기
exports.getRecommendCourses = async (req, res) => {
  try {
    const { gender, age, mbti, weather, amount } = req.body;
    const requestData = {
      gender,
      age,
      mbti,
      weather,
      amount,
    };

    const response = await axios.post(
      `${process.env.AI_BACKEND_URL}/recommend`,
      requestData
    );

    const recommendData = response.data.recommend;
    const courseIds = recommendData.map((item) => item[0]);

    // 추천된 코스들의 정보를 DB에서 가져오기
    const courses = await Course.find({ _id: { $in: courseIds } });
    const result = recommendData.map((item) => {
      const courseId = item[0];
      const rating = Math.floor(item[1] * 10) / 10;

      // DB에서 해당 코스 정보 찾기
      const course = courses.find((course) => course._id === courseId);

      // 코스가 존재하면 상세 정보와 함께 응답 데이터 구성
      return {
        id: courseId,
        title: course ? course.title : "Unknown",
        placeList: course ? course.placeList : [],
        placeID: course ? course.placeID : [],
        timeList: course ? course.timeList : [],
        concept: course ? course.concept : "Unknown",
        rating: rating,
      };
    });

    // 응답 전송
    res.status(200).json({ courses: result });
  } catch (error) {
    console.error("Error in getting recommend courses:", error);
    res
      .status(500)
      .json({ status: "fail", message: "Error in fetching recommendations" });
  }
};

// 코스 생성하기 (사용자 ID 필요)
// main 요소가 변했으면 새로운 course로 db에 저장
// main 요소가 변하지 않았으면 새로운 course로 db에 저장하되, course의 userid를 기존 course의 userid에 append 설정
exports.createCourse = async (req, res) => {
  const { title, placeList, placeID, timeList, concept, userId } = req.body;

  try {
    const newCourse = new Course({
      title,
      placeList,
      placeID,
      timeList,
      concept,
      userId,
    });

    await newCourse.save();

    res.status(201).json({
      message: "New course created",
      course: newCourse,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 코스 수정하기
exports.updateCourse = async (req, res) => {
  const { title, placeList, placeID, timeList, concept, userId } = req.body;

  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (!course.userId.includes(userId)) {
      return res
        .status(403)
        .json({ message: "You are not allowed to update this course" });
    }

    course.title = title || course.title;
    course.placeList = placeList || course.placeList;
    course.placeID = placeID || course.placeID;
    course.timeList = timeList || course.timeList;
    course.concept = concept || course.concept;
    await course.save();

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
