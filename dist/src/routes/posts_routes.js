"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const posts_controller_1 = __importDefault(require("../controllers/posts_controller"));
router.get("/", posts_controller_1.default.getAllPosts);
router.get("/filter", posts_controller_1.default.getPostBySenderId.bind(posts_controller_1.default));
router.post("/", posts_controller_1.default.addPost);
router.get("/:id", posts_controller_1.default.getPostById);
router.delete("/", posts_controller_1.default.deletePosts);
router.put("/:id", posts_controller_1.default.updatePostById.bind(posts_controller_1.default));
exports.default = router;
//# sourceMappingURL=posts_routes.js.map