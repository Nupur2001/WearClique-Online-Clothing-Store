import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./route/category.route.js"
import productRoutes from "./route/product.route.js"
import usersRoutes from "./route/users.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000; 
const DB_URI = process.env.MONGODBURI; 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/categories", categoryRoutes);
app.use("/product", productRoutes);
app.use("/users", usersRoutes);

// MongoDB Connection
mongoose.connect(DB_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});