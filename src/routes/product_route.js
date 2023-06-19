import express from "express";
import {
  addProduct,
  deleteData,
  get_AllData,
  get_byId,
  updateData,
} from "../controller/crud";

const product_route = express.Router();

product_route.post("/api/product/add-new-product", addProduct);
product_route.get("/api/product/products", get_AllData);
product_route.get("/api/product/product/:id", get_byId);
product_route.delete("/api/product/delete/:id", deleteData);
product_route.put("/api/product/update/:id", updateData);

export default product_route;
