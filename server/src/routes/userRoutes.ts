import express from "express";
import { login, signup, logout } from "../controllers/userController";
export const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.post("/logout", logout);
