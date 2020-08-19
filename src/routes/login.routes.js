const express = require("express");
const authMiddleware = require("../middleware/authenticate");
const authController = require("../controller/authentication.controller");

const router = express.Router();

require("../middleware/passport.int");

router.get(
  "/api/auth/google",
  authMiddleware.passportGoogleAuthenticationScope,
  (req, res, next) => {
    console.log("over to google now....");
  }
);

router.get(
  "/api/auth/google/redirect",
  authMiddleware.passportAuthenticate,
  authMiddleware.generateAuthToken,
  authController.redirectToLoginSuccess
);

router.get(
  "/api/secure/logout",
  authMiddleware.checkAuthToken,
  // authMiddleware.checkAuthentication,
  authController.logout
);

router.get(
  "/api/secure/userInfo",
  authMiddleware.checkAuthToken,
  authController.sendAuthenticationData
);

router.get(
  "/api/secure/authentication",
  authMiddleware.checkAuthToken,
  // authMiddleware.checkAuthentication,
  authController.sendAuthenticationData
);

module.exports = router;
