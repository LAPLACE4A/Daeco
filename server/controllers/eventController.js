const event = require("../models/eventModel");

// 모든 행사 가져오기
exports.getAllEvents = async (req, res) => {
  try {
    const events = await event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 특정 행사 가져오기
exports.getEventById = async (req, res) => {
  try {
    const events = await event.findById(req.params.id);
    if (!events) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
