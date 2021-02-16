import Router from "express";
import {
  getPosts,
  updatePost,
  createPost,
  deletePost,
  getPostById,
  likePost,
} from "../controllers/posts.js";

import auth from '../middleware/auth.js'

const router = new Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.patch("/:id", auth, updatePost);
router.post("/", auth, createPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
