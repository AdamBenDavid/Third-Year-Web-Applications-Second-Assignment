import express from "express";
const router = express.Router();
import postsController from "../controllers/posts_controller";

router.get("/", postsController.getAllPosts);

router.get("/filter", postsController.getPostBySenderId.bind(postsController) as express.RequestHandler);

router.post("/", postsController.addPost);

router.get("/:id", postsController.getPostById);

router.delete("/", postsController.deletePosts);

router.put("/:id", postsController.updatePostById.bind(postsController) as express.RequestHandler);

export default router;
