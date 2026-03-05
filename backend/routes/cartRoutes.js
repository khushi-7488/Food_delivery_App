import express from "express";
import authMiddleware from "../middleware/auth.js";
import { addCart, removeFromCart, getCart } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;