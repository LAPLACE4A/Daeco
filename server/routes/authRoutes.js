const express = require("express");
const passport = require("passport");
require("../config/passport");

const router = express.Router();

// 로그인 상태 확인
router.get("/status", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: req.user,
    });
  } else {
    res.json({
      isAuthenticated: false,
    });
  }
});

// Google 로그인
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google 콜백
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://daeco.vercel.app/auth",
  }),
  (req, res) => {
    if (req.user.isNewUser) {
      res.redirect("https://daeco.vercel.app/profile/change");
    } else {
      res.redirect("https://daeco.vercel.app");
    }
  }
);

// Kakao 로그인
router.get(
  "/kakao",
  passport.authenticate("kakao", {
    scope: ["profile_nickname", "account_email"],
  })
);

// Kakao 콜백
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "https://daeco.vercel.app/auth",
  }),
  (req, res) => {
    if (req.user.isNewUser) {
      res.redirect("https://daeco.vercel.app/profile/change");
    } else {
      res.redirect("https://daeco.vercel.app");
    }
  }
);

// Naver 로그인
router.get(
  "/naver",
  passport.authenticate("naver", { scope: ["profile", "email"] })
);

// Naver 콜백
router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "https://daeco.vercel.app/auth",
  }),
  (req, res) => {
    if (req.user.isNewUser) {
      res.redirect("https://daeco.vercel.app/profile/change");
    } else {
      res.redirect("https://daeco.vercel.app");
    }
  }
);

// 로그아웃
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
