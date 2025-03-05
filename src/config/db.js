import { createConnection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    console.log("Attempting to connect to MySQL..."); // Log connection attempt

    try {
        const connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("✅ MySQL conectado"); // Log successful connection

    } catch (error) {
        console.error("❌ Error al conectar a MySQL:", error.message); // Log error message

        process.exit(1);
    }
};

export default connectDB;
