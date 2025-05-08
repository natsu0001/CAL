
import mongoose from "mongoose";

const watchlistItemSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Firebase UID
  animeId: { type: String, required: true },
  title: String,
  imageUrl: String,
  status: { type: String, default: "watching" }, // optional
});

export default mongoose.model("WatchlistItem", watchlistItemSchema);
