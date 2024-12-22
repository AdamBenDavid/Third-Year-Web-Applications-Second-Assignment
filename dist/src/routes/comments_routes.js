"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const comments_controller_1 = __importDefault(require("../controllers/comments_controller"));
router.get("/", comments_controller_1.default.getAllComments);
router.post("/", comments_controller_1.default.addComment);
router.put("/:id", (req, res) => {
    comments_controller_1.default.updateCommentById(req, res);
});
router.get("/:id", comments_controller_1.default.getCommentById);
router.delete("/:id", (req, res) => {
    comments_controller_1.default.deleteCommentById(req, res);
});
// router.get("/", commentsController.getAllComments.bind(commentsController));
// router.get("/:id", commentsController.getCommentById.bind(commentsController));
// router.post("/", authMiddleware, commentsController.addComment.bind(commentsController));
//router.delete("/:id", authMiddleware, commentsController.deleteCommentById.bind(commentsController));
exports.default = router;
//# sourceMappingURL=comments_routes.js.map