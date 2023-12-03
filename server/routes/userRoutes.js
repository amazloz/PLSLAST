import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/login").post(authUser);
router
  .route("/userprofile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
