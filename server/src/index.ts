import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRoutes } from "./routes/userRoutes";
import cookieParser from "cookie-parser"
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
config();

app.use("/compiler", compilerRouter);
app.use("/user", userRoutes);

// Define a route handler for the root path ("/")
app.get("/", (req, res) => {
  res.send("OK!");
});

dbConnect();
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
