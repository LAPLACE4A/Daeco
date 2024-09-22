const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const pointRoutes = require("./routes/pointRoutes");
const shopRoutes = require("./routes/shopRoutes");
const eventRoutes = require("./routes/eventRoutes");

dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://daeco.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000, secure: true, sameSite: "none" },
    resave: false,
    saveUninitialized: true,
  })
);

// Passport 설정
app.use(passport.initialize());
app.use(passport.session());

// MongoDB 연결
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);
app.use("/ratings", ratingRoutes);
app.use("/points", pointRoutes);
app.use("/shops", shopRoutes);
app.use("/events", eventRoutes);
