"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const posts_controller_1 = __importDefault(require("../controllers/posts_controller"));
router.get("/", posts_controller_1.default.getAllPosts);
router.get("/filter", (req, res) => {
    posts_controller_1.default.getPostBySenderId(req, res);
});
router.post("/", posts_controller_1.default.addPost);
router.get("/:id", posts_controller_1.default.getPostById);
router.delete("/", posts_controller_1.default.deletePosts);
router.put("/:id", (req, res) => {
    posts_controller_1.default.updatePostById(req, res);
});
exports.default = router;
//# sourceMappingURL=posts_routes.js.map