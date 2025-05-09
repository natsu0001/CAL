import mongoose from 'mongoose';

const WatchlistItemSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  mal_id: {
    type: Number,
    required: true,
  },
  title: String,
  image_url: String,
  
});

export default mongoose.model("WatchlistItem", WatchlistItemSchema);
