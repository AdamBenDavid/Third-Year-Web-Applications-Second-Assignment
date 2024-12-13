const { get } = require("mongoose");
const postModel = require("../modules/post_modules");

const addPost = async (req, res) => {
  try {
    const post = new postModel(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await postModel.findById(postId);
    if (post != null) res.send(post);
    else res.status(400).send("post not found");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePosts = async (req, res) => {
  try {
    const posts = await postModel.deleteMany();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostBySenderId = async (req, res) => {
  const senderId = req.query.senderId;

  try {
    // Validate if sender ID is provided
    if (!senderId) {
      return res.status(400).send("sender query parameter is required");
    }

    // Find posts by sender ID
    const posts = await postModel.find({ senderId: senderId });

    // Check if any posts are found
    if (posts.length > 0) {
      res.status(200).send(posts);
    } else {
      res.status(404).send("No posts found for the specified sender");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePostById = async (req, res) => {
  const postId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedPost = await postModel.findByIdAndUpdate(postId, updatedData, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }
    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPosts,
  addPost,
  getPostById,
  deletePosts,
  getPostBySenderId,
  updatePostById,
};
