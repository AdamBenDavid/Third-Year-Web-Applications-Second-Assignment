const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  commentData: {
    type: String,
    required: true,
  },
});

module.exports = commentSchema;
