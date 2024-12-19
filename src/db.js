import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI); // conecta con la base de datos utilizando mongoose
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
