import Router from "express";
import {
  getPosts,
  updatePost,
  createPost,
  deletePost,
  getPostById,
  likePost,
} from "../controllers/posts.js";

const router = new Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.patch("/:id", updatePost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
