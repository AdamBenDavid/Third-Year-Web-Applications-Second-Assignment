"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_routes_1 = __importDefault(require("../src/routes/posts_routes"));
const comments_routes_1 = __importDefault(require("../src/routes/comments_routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const db = mongoose_1.default.connection;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/posts", posts_routes_1.default);
app.use("/comments", comments_routes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
if (!process.env.DB_CONNECT) {
    console.error("Missing DB_CONNECT env variable");
    process.exit(1);
}
else {
    mongoose_1.default.connect(process.env.DB_CONNECT, {})
        .then(() => {
        console.log('Connected to MongoDB!');
    })
        .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });
}
//# sourceMappingURL=server.js.map