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
router.put("/:id", comments_controller_1.default.updateCommentById.bind(comments_controller_1.default));
router.get("/:id", comments_controller_1.default.getCommentById);
router.delete("/:id", comments_controller_1.default.deleteCommentById.bind(comments_controller_1.default));
exports.default = router;
//# sourceMappingURL=comments_routes.js.map