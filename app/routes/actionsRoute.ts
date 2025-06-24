import express from "express";
import actionController from "../controllers/actionController";

const router = express.Router();

router.get("/", actionController.getAllActions);
router.post("/", actionController.addAction);
router.get("/:id", actionController.getAction);
router.put("/:id", actionController.updateAction);
router.delete("/:id", actionController.deleteAction);

export default router;
