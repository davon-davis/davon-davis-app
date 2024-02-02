import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT: string | number = process.env.PORT || 3003;

app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello Davon!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
