const express = require("express");
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware.js");
const { getUsers } = require("../controllers/userController.js");

const router = express.Router();

router.route("/").get(getUsers);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/login").post(authUser);
router
  .route("/userprofile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
