import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import medicinaRoutes from "./routes/medicinaRoutes.js"; // Importing medicina routes
import categoryRoutes from "./routes/categoryRoutes.js"; // Importing category routes

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/medicinas", medicinaRoutes); // Adding medicina routes
app.use("/api/categories", categoryRoutes); // Adding category routes

export default app;
