const express = require("express");
const passport = require("passport");
require("../config/passport");

const router = express.Router();

// Google 로그인
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google 콜백
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// Kakao 로그인
router.get("/kakao", passport.authenticate("kakao"));

// Kakao 콜백
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/auth",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// Naver 로그인
router.get("/naver", passport.authenticate("naver"));

// Naver 콜백
router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/auth",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// 로그아웃
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
