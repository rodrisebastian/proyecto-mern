import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import dotenv from 'dotenv';

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    dotenv.config();
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();