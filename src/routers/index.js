import { Router } from "express";
import productRouter from "./products.router";
import authRouter from "./auth.router";

const router = Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);
export default router;