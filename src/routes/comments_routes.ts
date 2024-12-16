import express from "express";
const router = express.Router();
import commentsController from "../controllers/comments_controller";


router.get("/", commentsController.getAllComments);

router.post("/", commentsController.addComment);

router.put("/:id", commentsController.updateCommentById.bind(commentsController) as express.RequestHandler);

router.get("/:id", commentsController.getCommentById);

router.delete("/:id",commentsController.deleteCommentById.bind(commentsController) as express.RequestHandler);

export default router;