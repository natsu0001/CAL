import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import watchlistRoutes from "./routes/watchlist.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" Connected to MongoDB Atlas"))
  .catch((err) => console.error(" MongoDB connection error:", err));

app.use("/api/watchlist", watchlistRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
