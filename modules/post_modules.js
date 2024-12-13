const mongoose = require("mongoose");
const CommentSchema = require("./comments_modules");
const { Schema } = mongoose;

const postSchema = new Schema({
  postId: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: true,
  },
  postData: {
    type: String,
    required: true,
  },
  comments: [CommentSchema],
});

module.exports = mongoose.model("PostSchema", postSchema);
