import express from 'express'
import cors from "cors"; // maneja politicas de origen cruzado
import morgan from "morgan"; // registra solicitudes HTTP
import cookieParser from 'cookie-parser'; // manejar cookies


import authRoutes from "./routes/authRouthes.js";
import taskRoutes from "./routes/tasksRouthes.js";

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;

