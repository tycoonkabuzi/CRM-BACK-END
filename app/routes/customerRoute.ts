import express from "express";
import customerController from "../controllers/customerController";
const route = express.Router();

route.get("/", customerController.index);
route.post("/", customerController.addCustomer);
route.get("/:id", customerController.getSingleCustomer);
route.delete("/:id", customerController.deleteCustomer);
route.put("/:id", customerController.updateCustomer);

export default route;
