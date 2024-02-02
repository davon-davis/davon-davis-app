"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3003;
// Configure CORS to accept requests from your frontend domain
app.use((0, cors_1.default)({
    origin: 'https://d642hegmyoch1.cloudfront.net' // Update this to your CloudFront domain or custom domain
}));
app.use(express_1.default.json());
// Define your API routes
app.get('/', (req, res) => {
    res.json({ message: "Hello Davon!" });
});
// No need to serve static files here, so the express.static middleware is removed
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
