export const PORT = process.env.PORT || 4000; 
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/Backend-MERN";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret"; // clave secreta para firmar y verificar JWT

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";