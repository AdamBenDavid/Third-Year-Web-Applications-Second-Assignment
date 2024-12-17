import express from "express";
const router = express.Router();
import postsController from "../controllers/posts_controller";

router.get("/", postsController.getAllPosts);

// router.get("/filter", postsController.getPostBySenderId.bind(postsController) as express.RequestHandler);

router.get("/filter", (req,res)=>{
    postsController.getPostBySenderId(req,res);
});

router.post("/", postsController.addPost);

router.get("/:id", postsController.getPostById);

router.delete("/", postsController.deletePosts);

// router.put("/:id", postsController.updatePostById.bind(postsController) as express.RequestHandler);

router.put("/:id", (req,res)=>{
    postsController.updatePostById(req,res);
});

export default router;
