import express from "express";
const router = express.Router();
import postsController from "../controllers/posts_controller";
import { authMiddleware } from "../controllers/auth_controller";

router.get("/", postsController.getAllPosts);

router.get("/filter", (req,res)=>{
    postsController.getPostBySenderId(req,res);
});

router.post("/",postsController.addPost);

router.get("/:id", postsController.getPostById);

router.delete("/", postsController.deletePosts);

router.put("/:id", (req,res)=>{
    postsController.updatePostById(req,res);
});

export default router;