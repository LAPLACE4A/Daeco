const passport = require("passport");
const dotenv = require("dotenv");

const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require("passport-naver").Strategy;

dotenv.config();

passport.use(
  new KakaoStrategy(
    {
      clientID: dotenv.KAKAO_API_KEY,
      clientSecret: "YOUR_KAKAO_CLIENT_SECRET",
      callbackURL: "http://localhost:3000/auth/kakao/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // 카카오에서 제공하는 사용자 정보에서 이메일과 다른 필드를 가져옴
        const {
          email,
          profile: { nickname: name, profile_image_url: profilePictureUrl },
          gender,
          age_range: age,
        } = profile._json.kakao_account;

        // 사용자 정보가 이미 존재하는지 확인
        let user = await User.findOne({ email: email });

        if (user) {
          // 사용자 정보가 이미 존재하면 로그인 처리
          return done(null, user);
        } else {
          // 존재하지 않으면 새 사용자 생성
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
          // 새 사용자 저장
          await user.save();
          // 새로 생성한 사용자 로그인 처리
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
      clientID: "YOUR_NAVER_CLIENT_ID",
      clientSecret: "YOUR_NAVER_CLIENT_SECRET",
      callbackURL: "http://localhost:3000/auth/naver/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // 사용자 정보 저장 또는 데이터베이스와의 연동 로직
      return done(null, profile);
    }
  )
);

// 사용자 세션 관리
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
