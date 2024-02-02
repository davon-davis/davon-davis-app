import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT: string | number = process.env.PORT || 3003;

// Configure CORS to accept requests from your frontend domain
app.use(cors({
    origin: 'https://d642hegmyoch1.cloudfront.net' // Update this to your CloudFront domain or custom domain
}));

app.use(express.json());

// Define your API routes
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: "Hello from the backend API!" });
});

// No need to serve static files here, so the express.static middleware is removed

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
