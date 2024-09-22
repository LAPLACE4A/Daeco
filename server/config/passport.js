const dotenv = require("dotenv");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require("passport-naver").Strategy;
const User = require("../models/User");

dotenv.config();

//Google OAuth 설정
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://daeco-d6m0.onrender.com/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { email, name } = profile._json;

        let user = await User.findOne({ email: email });

        if (user) {
          return done(null, user);
        } else {
          user = new User({
            name: name || "Unknown",
            email: email,
            profile_picture: "default.jpg",
            gender: "Unknown",
            age: 0,
            mbti: "Unknown",
            role: "user",
            point: 0,
          });
          await user.save();
          user.isNewUser = true;
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// Kakao OAuth 설정
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_API_KEY,
      clientSecret: process.env.KAKAO_API_SECRET,
      callbackURL: "https://daeco-d6m0.onrender.com/auth/kakao/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const {
          email,
          profile: { nickname: name, profile_image_url: profilePictureUrl },
          gender,
          age_range: age,
        } = profile._json.kakao_account;

        let user = await User.findOne({ email: email });

        if (user) {
          return done(null, user);
        } else {
          user = new User({
            name: name || "Unknown",
            email: email,
            profile_picture: profilePictureUrl || "default.jpg",
            gender: gender || "Unknown",
            age: 0,
            mbti: "Unknown",
            role: "user",
            point: 0,
          });
          await user.save();
          user.isNewUser = true;
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// Naver OAuth 설정
passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_API_KEY,
      clientSecret: process.env.NAVER_API_SECRET,
      callbackURL: "https://daeco-d6m0.onrender.com/auth/naver/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { email, nickname: name } = profile._json;

        let user = await User.findOne({ email: email });

        if (user) {
          return done(null, user);
        } else {
          user = new User({
            name: name || "Unknown",
            email: email,
            profile_picture: "default.jpg",
            gender: "Unknown",
            age: 0,
            mbti: "Unknown",
            role: "user",
            point: 0,
          });
          await user.save();
          user.isNewUser = true;
          return done(null, user);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// 사용자 세션 관리
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
