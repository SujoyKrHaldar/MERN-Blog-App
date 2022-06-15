const Post = require("../models/Post");

const postControllers = {
  getAllPosts: async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try {
      let filteredPost;

      if (username) {
        filteredPost = await Post.find({ username });
        res.status(200).json(filteredPost);
      } else if (category) {
        filteredPost = await Post.find({
          category: {
            $in: [category],
          },
        });
      } else {
        filteredPost = await Post.find();
      }

      res.status(200).json(filteredPost);
    } catch (err) {
      res.status(500).json({ message: "Server error " + err.message });
    }
  },

  getAPost: async (req, res) => {
    try {
      const { id } = req.params;
      const findPost = await Post.findById(id);

      res.status(200).json(findPost);
    } catch (err) {
      res.status(404).json({ message: "Post not found" });
    }
  },

  createPost: async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savedPost = await newPost.save();

      res.status(201).json({
        message: `Post created.`,
        savedPost,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },

  updatePost: async (req, res) => {
    const { id } = req.params;

    try {
      const findPost = await Post.findById(id);

      if (findPost.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          res.status(200).json({ message: "Post updated.", updatedPost });
        } catch (err) {
          res.status(500).json({ message: "Server error. " + err.message });
        }
      } else {
        res
          .status(401)
          .json({ message: "You are not authorized to update this post." });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },

  deletePost: async (req, res) => {
    const { id } = req.params;

    try {
      const findPost = await Post.findById(id);

      if (findPost.username === req.body.username) {
        try {
          await Post.findByIdAndDelete(id);
          res.status(200).json({ message: "Post deleted." });
        } catch (err) {
          res.status(500).json({ message: "Server error. " + err.message });
        }
      } else {
        res
          .status(401)
          .json({ message: "You are not authorized to delete this post." });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error. " + err.message });
    }
  },
};

module.exports = postControllers;
