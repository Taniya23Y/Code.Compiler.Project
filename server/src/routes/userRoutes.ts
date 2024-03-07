import express from "express";
import { login, signup, logout, userDetails } from "../controllers/userController";
import {verifyToken} from "../middlewares/verifyToken";
import { getMyCodes } from "../controllers/compilerController";
export const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
// middleware function to check the token
userRoutes.get("/user-details", verifyToken, userDetails);
userRoutes.get("/my-codes", verifyToken, getMyCodes);