
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


router.delete("/:userId/:malId", async (req, res) => {
  try {
    const { userId, malId } = req.params;
    const result = await WatchlistItem.findOneAndDelete({ userId, mal_id: malId });

    if (!result) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;
