import express from "express";
const router = express.Router();
import commentsController from "../controllers/comments_controller";

router.get("/", commentsController.getAllComments);

router.post("/", commentsController.addComment);

router.put("/:id", (req,res)=>{
    commentsController.updateCommentById(req,res);
});

router.get("/:id", commentsController.getCommentById);

router.delete("/:id", (req,res)=>{
    commentsController.deleteCommentById(req,res);
});

export default router;