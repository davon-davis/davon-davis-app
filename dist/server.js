"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const sendEmail = async (templateParams) => {
    const mailOptions = {
        from: templateParams.userEmail,
        to: process.env.RECIPIENT_EMAIL,
        subject: "Contact Form Submission",
        text: `From: ${templateParams.fromName}\nEmail: ${templateParams.userEmail}\nMessage: ${templateParams.message}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Successfully sent contact email!");
    }
    catch (err) {
        console.error("Failed to send email.", err);
    }
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "https://d642hegmyoch1.cloudfront.net", // Update this to your CloudFront domain or custom domain
}));
app.use(express_1.default.json());
app.post("/api/email", async (req, res) => {
    try {
        await sendEmail(req.body);
        res.status(200).json({ message: "Email sent successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to hit api " + error });
    }
});
app.get("/", (req, res) => {
    res.json({ message: "Hello Davon!" });
});
const PORT = process.env.PORT || 8080;
exports.server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
});
