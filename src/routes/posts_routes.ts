import express from "express";
const router = express.Router();
import postsController from "../controllers/posts_controller";
import { authMiddleware } from "../controllers/auth_controller";

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: The Comments API
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - postData
 *         - senderId
 *       properties:
 *         postData:
 *           type: string
 *           description: The content of the post
 *         senderId:
 *           type: string
 *           description: The ID of the user who created the post
 *       example:
 *         postData: 'This is a post content'
 *         senderId: '12345'
 */

router.get("/", postsController.getAllPosts);

router.get("/filter", (req, res) => {
  postsController.getPostBySenderId(req, res);
});

router.post("/", authMiddleware, postsController.addPost);

router.get("/:id", postsController.getPostById);

router.delete("/", authMiddleware, postsController.deletePosts);

router.put("/:id", authMiddleware, (req, res) => {
  postsController.updatePostById(req, res);
});

export default router;
