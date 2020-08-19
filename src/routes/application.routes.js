const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authenticate");
const appController = require("../controller/application.controller");


router.get(
  "/api/secure/app/ceremonies",
  authMiddleware.checkAuthToken,
  appController.ceremonies
);

module.exports = router;
