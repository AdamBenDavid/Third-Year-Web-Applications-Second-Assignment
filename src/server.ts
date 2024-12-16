import express from "express";
import postsRoutes from "../src/routes/posts_routes";
import commentsRoutes from "../src/routes/comments_routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

if (!process.env.DB_CONNECT) {
  console.error("Missing DB_CONNECT env variable");
  process.exit(1);
} else {
  mongoose.connect(process.env.DB_CONNECT, {})
    .then(() => {
      console.log('Connected to MongoDB!');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
    });
}



