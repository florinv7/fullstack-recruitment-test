import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const rockets = require('./data/products')

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send('API is running...')
})

app.get("/api/rockets", (req: Request, res: Response) => {
    res.json(rockets)
})

app.get("/api/rockets/:id", (req: Request, res: Response) => {
    const rocket = rockets.find((r : any) => r._id == req.params.id)
    res.json(rocket)
})

app.listen(port, () => {
    console.log(`Server is running at: ${port}`);
  });