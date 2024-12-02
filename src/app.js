import express from 'express'
import cors from "cors";
import morgan from "morgan";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authRouthes.js";
import taskRoutes from "./routes/tasksRoutes.js";

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;

