import express from "express";
import {
  createFeedback,
  getMyFeedbacks,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createFeedback).get(protect, getMyFeedbacks);
router.route("/:id").put(protect, updateFeedback).delete(protect, deleteFeedback);
router.route("/test").get(protect, (req, res) => {
  res.status(200).json({ message: "Test route is working" });
});

export default router;
