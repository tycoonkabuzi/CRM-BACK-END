import express from "express";
import customerController from "../controllers/customerController";
import upload from "../middleware/upload";
const route = express.Router();

route.get("/", customerController.index);
route.get("/all", customerController.getAllCustomers);
route.post(
  "/",
  upload.single("profilePicture"),
  customerController.addCustomer
);
route.get("/:id", customerController.getSingleCustomer);
route.delete("/:id", customerController.deleteCustomer);
route.put("/:id", customerController.updateCustomer);

export default route;
