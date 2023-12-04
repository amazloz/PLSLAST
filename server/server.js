import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fs from "fs";
import https from "https";
import { Server } from "socket.io";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import interestRoutes from "./routes/interestRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();
const key = fs.readFileSync("./certs/cert.key");
const cert = fs.readFileSync("./certs/cert.crt");

const expressServer = https.createServer({ key, cert }, app);
const io = new Server(expressServer, {
  cors: ["https:///localhost:3000"],
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/interests", interestRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
