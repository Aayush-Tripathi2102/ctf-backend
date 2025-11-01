import express from "express";
import auth from '../middlewares/authMiddleware.js';
import mongoose from "mongoose";
import path from "path";
import fs from "fs";

const router = express.Router();

// Assuming you have a Question model in models/Question.js
import Question from "../models/Question.js";

// GET /api/ctf/questions - Get all questions (auth required)
router.get("/questions", auth, async (req, res) => {
  try {
    const questions = await Question.find();
    res.json({ success: true, questions });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch questions" });
  }
});

// GET /api/ctf/download - Download testctf.zip (auth required)
router.get("/download/1", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "1.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "1.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/2", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "2.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "2.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/3", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "3.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "3.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/4", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "4.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "4.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/5", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "5.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "5.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/6", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "6.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "6.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/7", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "7.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "7.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/8", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "8.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "8.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/9", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "9.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "9.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/download/10", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "questions", "10.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "10.zip");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});


router.get("/snippet/1", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet1.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet1.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

router.get("/snippet/2", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet2.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet2.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/3", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet3.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet3.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/4", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet4.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet4.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/5", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet5.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet5.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/6", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet6.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet6.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/7", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet7.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet7.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/8", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet8.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet8.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/9", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet9.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet9.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/10", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet10.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet10.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});
router.get("/snippet/11", auth, async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "snippets", "snippet11.txt");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: "File not found" });
    }
    res.download(filePath, "snippet11.txt");
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to download file" });
  }
});

// POST /api/ctf/start - Mark question as started by a team member
router.post("/start", auth, async (req, res) => {
  const { questionId } = req.body;
  const userId = req.user._id;
  try {
    // Find user's team
    const team = await mongoose.model("Team").findOne({ members: userId });
    if (!team) return res.status(404).json({ success: false, error: "Team not found" });
    // If not started, set startedAt
    if (!team.progress.has(questionId) || !team.progress.get(questionId).startedAt) {
      team.progress.set(questionId, {
        ...team.progress.get(questionId),
        startedAt: new Date()
      });
      await team.save();
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to mark question as started" });
  }
});

// POST /api/ctf/submit - Submit flag for a question
router.post("/submit", auth, async (req, res) => {
  const { questionId, flag } = req.body;
  const userId = req.user._id;
  try {
    // Find user's team
    const team = await mongoose.model("Team").findOne({ members: userId });
    if (!team) return res.status(404).json({ success: false, error: "Team not found" });
    // Get question start time
    let progress = team.progress.get(questionId) || {};
    if (!progress.startedAt) return res.status(400).json({ success: false, error: "Question not started" });
    // If already submitted, ignore
    if (progress.submittedAt) return res.status(400).json({ success: false, error: "Flag already submitted" });
    // Mark submission
    progress.submittedAt = new Date();
    progress.submittedBy = userId;
    progress.flag = flag;
    team.progress.set(questionId, progress);
    // Calculate elapsed time
    const elapsed = (progress.submittedAt - progress.startedAt) / 1000; // seconds
    // Example scoring: faster = more points
    const baseScore = 1000;
    const score = Math.max(baseScore - Math.floor(elapsed), 100); // minimum 100
    team.score += score;
    await team.save();
    res.json({ success: true, score, elapsed });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to submit flag" });
  }
});

export default router;