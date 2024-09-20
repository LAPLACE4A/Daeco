const dotenv = require("dotenv");
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require("passport-naver").Strategy;
const User = require("../models/User");

dotenv.config();

// Kakao OAuth 설정
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_API_KEY,
      clientSecret: process.env.KAKAO_API_SECRET,
      callbackURL: "https://daeco.vercel.app/auth/kakao/callback",
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
            age: age || "Unknown",
            mbti: "Unknown",
            role: "user",
            point: 0,
          });
          await user.save();
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
      callbackURL: "https://daeco.vercel.app/auth/naver/callback",
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
            age: "Unknown",
            mbti: "Unknown",
            role: "user",
            point: 0,
          });
          await user.save();
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
  done(null, user.id); // 세션에 user.id 저장
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // 세션에서 id를 바탕으로 사용자 정보 조회
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
