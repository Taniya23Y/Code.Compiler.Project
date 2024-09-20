// import express from "express";
// import cors from "cors";
// import { config } from "dotenv";
// import { dbConnect } from "./lib/dbConnect";
// import { compilerRouter } from "./routes/compilerRouter";
// import { userRoutes } from "./routes/userRoutes";
// import cookieParser from "cookie-parser";
// const app = express();

//* setting up port number
// const PORT = process.env.PORT || 4000;

// app.use(express.json());
// app.use(cookieParser());
//* app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// app.use(
//   cors({
//     credentials: true,
//* origin: [
//*   "https://code-compiler-project.vercel.app",
//*   "http://localhost:5173",
//* ],
//     origin: ["http://localhost:5173", process.env.CLIENT_URL!],
//   })
// );
// config();

// app.use("/compiler", compilerRouter);
// app.use("/user", userRoutes);

//* Define a route handler for the root path ("/")
// app.get("/", (req, res) => {
//   res.send("OK!");
// });

// dbConnect();
//* app.listen(4000, () => {
//*   console.log("http://localhost:4000");
//* });

// app.listen(PORT, () => {
//   console.log(`App is listening at ${PORT}`);
// });

import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRoutes } from "./routes/userRoutes";
import cookieParser from "cookie-parser";

config(); // Load environment variables

const app = express();

// setting up port number
const PORT = process.env.PORT || 4000;
const CLIENT_URL =
  process.env.CLIENT_URL || "https://code-compiler-project.vercel.app";

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS setup with credentials
app.use(
  cors({
    origin: CLIENT_URL, // Use your frontend's URL from .env or default
    credentials: true, // Allow cookies and other credentials to be sent
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Handle preflight requests
app.options("*", cors()); // Allows all preflight OPTIONS requests

// Routes
app.use("/compiler", compilerRouter);
app.use("/user", userRoutes);

// Define a route handler for the root path ("/")
app.get("/", (req, res) => {
  res.send("OK!");
});

// Connect to the database
dbConnect();

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
