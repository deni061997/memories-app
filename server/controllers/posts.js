import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const postMessages = await PostMessage.findById(id);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString()});

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send({ message: "No post with that id" });
    }

    await PostMessage.findByIdAndDelete(id);

    res.status(201).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send({ message: "No post with that id" });
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { ...post, id },
      { new: true }
    );

    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if(!req.userId) {
    return res.json({ message: 'Unauthenticated'})
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send({ message: "No post with that id" });
    }

    const post = await PostMessage.findById(id);
    
    const index = post.likes.findIndex(id => id === String(req.userId))

    if(index === -1) {
      post.likes.push(req.userId)
    } else {
      post.likes = post.likes.filter(id => id !== String(req.userId))
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      post,
      { new: true }
    );

    res.json(updatedPost);

  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
