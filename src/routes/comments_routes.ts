import express from "express";
const router = express.Router();
import commentsController from "../controllers/comments_controller";
import { authMiddleware } from "../controllers/auth_controller";

router.get("/", commentsController.getAllComments);

router.post("/", authMiddleware, commentsController.addComment);

router.put("/:id", authMiddleware, (req,res)=>{
    commentsController.updateCommentById(req,res);
});

router.get("/:id", commentsController.getCommentById);

router.delete("/:id", authMiddleware, (req,res)=>{
    commentsController.deleteCommentById(req,res);
});

export default router;