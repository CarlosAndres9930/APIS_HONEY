import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import medicinaRoutes from "./routes/medicinaRoutes.js"; 
import sedeRoutes from "./routes/sedeRoutes.js"; 
import specimenRoutes from "./routes/specimenRoutes.js"; 
import categoryRoutes from "./routes/categoryRoutes.js"; 

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/medicinas", medicinaRoutes);
app.use("/api/specimens", specimenRoutes); 
app.use("/api/categories", categoryRoutes);
app.use("/api/sedes", sedeRoutes); 

export default app;
