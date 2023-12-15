const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const https = require("https");
const socketio = require("socket.io");
const cors = require("cors");

const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
const interestRoutes = require("./routes/interestRoutes.js");
const languageRoutes = require("./routes/languageRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();
const key = fs.readFileSync("./certs/cert.key");
const cert = fs.readFileSync("./certs/cert.crt");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/interests", interestRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const expressServer = https.createServer({ key, cert }, app);
const io = socketio(expressServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});

module.exports = { io, expressServer, app };
