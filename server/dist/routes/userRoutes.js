"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const verifyToken_1 = require("../middlewares/verifyToken");
const compilerController_1 = require("../controllers/compilerController");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.post("/signup", userController_1.signup);
exports.userRoutes.post("/login", userController_1.login);
exports.userRoutes.post("/logout", userController_1.logout);
// middleware function to check the token
exports.userRoutes.get("/user-details", verifyToken_1.verifyToken, userController_1.userDetails);
exports.userRoutes.get("/my-codes", verifyToken_1.verifyToken, compilerController_1.getMyCodes);
