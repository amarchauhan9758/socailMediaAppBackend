const express = require("express");
const postRouter = express.Router();
const { userAuth } = require("../middleware/auth");
const Thought = require("../models/project");

postRouter.post("/post", userAuth, async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || content.trim() === "") {
      return res.status(400).json({ error: "Content cannot be empty" });
    }

    const newThought = new Thought({
      content,
      owner: req.user._id,
    });

    await newThought.save();
    res
      .status(201)
      .json({ message: "Thought posted successfully", post: newThought });
  } catch (error) {
    console.error("Post error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

postRouter.get("/getAllPost", userAuth, async (req, res) => {
  try {
    const thoughts = await Thought.find()
      .sort({ createdAt: -1 })
      .populate("owner", "firstName lastName email") // populate owner
      .populate("comments.author", "firstName lastName");

    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// postrouter.patch();

module.exports = postRouter;
