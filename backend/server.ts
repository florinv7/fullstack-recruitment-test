import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db'
import { notFound, errorHandler } from './middleware/errorMiddleware';
import rocketRoutes from './routes/rocketRoutes'

dotenv.config();

connectDB()

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send('API is running...')
})

app.use("/api/rockets", rocketRoutes)

app.use(notFound)

//middleware for error handling
app.use(errorHandler)

const PORT = process.env.PORT || "5000"

app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
  });