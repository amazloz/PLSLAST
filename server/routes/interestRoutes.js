import express from "express";
const router = express.Router();
import { getInterests } from "../controllers/interestController.js";

router.route("/").get(getInterests);

export default router;
