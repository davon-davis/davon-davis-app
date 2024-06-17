import express, { Request, Response } from "express";
import cors from "cors";
import dontenv from "dotenv";
import nodemailer from "nodemailer";
import { sendEmail } from "./backend/emailService";

dontenv.config();

const app = express();

app.use(
  cors({
    origin: "https://d642hegmyoch1.cloudfront.net", // Update this to your CloudFront domain or custom domain
  }),
);

app.use(express.json());

app.post("/api/email", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to hit api " + error });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello Davon!" });
});

const PORT = process.env.PORT || 8080;
export const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
