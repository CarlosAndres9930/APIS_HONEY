import express from 'express';
import bodyParser from 'body-parser';
import sedeRoutes from './src/routes/sedeRoutes.js'; // Importing sedeRoutes
import categoryRoutes from './src/routes/categoryRoutes.js'; // Importing categoryRoutes
import medicinaRoutes from './src/routes/medicinaRoutes.js'; // Importing medicinaRoutes
import specimenRoutes from './src/routes/specimenRoutes.js';

const app = express();
import connectDB from './src/config/db.js'; // Importing the database connection

const PORT = process.env.PORT || 3002;

// Connect to the database
connectDB(); // Call the function to connect to MySQL

app.use(bodyParser.json());

// Registering the routes
app.use('/api/sedes', sedeRoutes); // Using sedeRoutes under /api/sedes
app.use('/api/categories', categoryRoutes); // Using categoryRoutes under /api/categories
app.use('/api/medicinas', medicinaRoutes); // Using medicinaRoutes under /api/medicinas
app.use('./api/specimens', specimenRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Error en el Servidor", error: err.message });
});
