import { Router } from "express";
import { createOne, deleteOne, getAll, getOne, updateOne } from "../controllers/products.controller";
import { validateRequest } from "../middlewares/validateRequest";
import schema from "../validations/product.validation";
const productRouter = Router();

// trả về danh sách sản phẩm
productRouter.get("/", getAll);
productRouter.get("/:id", getOne);
productRouter.post("/", createOne);
productRouter.put("/:id", updateOne);
productRouter.delete("/:id", deleteOne);

// /products
productRouter.post("/", validateRequest(schema), createOne);
productRouter.put("/:id", validateRequest(schema), updateOne);
export default productRouter;