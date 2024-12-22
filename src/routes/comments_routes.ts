import express from "express";
const router = express.Router();
import commentsController from "../controllers/comments_controller";
import { authMiddleware } from "../controllers/auth_controller";

router.get("/", commentsController.getAllComments);

router.post("/", commentsController.addComment);

router.put("/:id", (req,res)=>{
    commentsController.updateCommentById(req,res);
});

router.get("/:id", commentsController.getCommentById);

router.delete("/:id",(req,res)=>{
    commentsController.deleteCommentById(req,res);
});

// router.get("/", commentsController.getAllComments.bind(commentsController));

// router.get("/:id", commentsController.getCommentById.bind(commentsController));

// router.post("/", authMiddleware, commentsController.addComment.bind(commentsController));

//router.delete("/:id", authMiddleware, commentsController.deleteCommentById.bind(commentsController));

export default router;