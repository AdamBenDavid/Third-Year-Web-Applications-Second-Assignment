"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const posts_controller_1 = __importDefault(require("../controllers/posts_controller"));
const auth_controller_1 = require("../controllers/auth_controller");
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
router.get("/", posts_controller_1.default.getAllPosts);
router.get("/filter", (req, res) => {
    posts_controller_1.default.getPostBySenderId(req, res);
});
router.post("/", auth_controller_1.authMiddleware, posts_controller_1.default.addPost);
router.get("/:id", posts_controller_1.default.getPostById);
router.delete("/", auth_controller_1.authMiddleware, posts_controller_1.default.deletePosts);
router.put("/:id", auth_controller_1.authMiddleware, (req, res) => {
    posts_controller_1.default.updatePostById(req, res);
});
exports.default = router;
//# sourceMappingURL=posts_routes.js.map