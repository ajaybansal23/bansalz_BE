const express = require("express");
const authMiddleware = require("../middleware/authenticate");
const authController = require("../controller/authentication.controller");

const router = express.Router();

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
  authController.redirectToUI
);

router.get(
  "/api/secure/logout",
  authMiddleware.checkAuthentication,
  authController.logout
);

router.get(
  "/api/secure/authentication",
  authMiddleware.checkAuthentication,
  authController.sendAuthenticationData
);

module.exports = router;
