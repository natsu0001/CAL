import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import watchlistRoutes from './routes/watchlist.js'; 

dotenv.config(); 

const app = express();


app.use(express.json());



app.use('/api/watchlist', watchlistRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

