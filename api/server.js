import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";

connectDB();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Import routes
import authRoutes from "./routes/authRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
