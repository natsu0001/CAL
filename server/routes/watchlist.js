
import express from "express";
import WatchlistItem from "../models/WatchlistItem.js";

const router = express.Router();


router.get("/:userId", async (req, res) => {
  try {
    const items = await WatchlistItem.find({ userId: req.params.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const newItem = new WatchlistItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await WatchlistItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
