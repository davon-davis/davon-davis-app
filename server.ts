import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path'

const app = express();
const PORT: string | number = process.env.PORT || 3003;

app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
