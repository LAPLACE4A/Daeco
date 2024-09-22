const appendUserIdToExistingCourse = async (req, res, next) => {
  try {
    // main placeID가 변경되지 않았을 때만 userId 추가
    if (req.isMainUnchanged) {
      const userId = req.body.userId;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }

      // 기존 코스에 userId 추가
      const updatedUserIds = [
        ...new Set([...req.existingCourse.userId, userId]),
      ];
      req.existingCourse.userId = updatedUserIds;

      await req.existingCourse.save();

      console.log(
        "User ID appended to the existing course:",
        req.existingCourse
      );
    }

    next();
  } catch (error) {
    console.error("Error appending user ID:", error);
    res.status(500).json({ message: "Error appending user ID" });
  }
};

module.exports = appendUserIdToExistingCourse;
