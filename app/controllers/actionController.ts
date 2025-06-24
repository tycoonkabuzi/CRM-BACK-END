import { Request, Response } from "express";
import Action from "../models/actionModel";
import Customer from "../models/customerModel";

const actionController = {
  getAllActions: async (req: Request, res: Response) => {
    try {
      const allActions = await Action.find({}).populate("customer");
      res.status(200).json(allActions);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  addAction: async (req: Request, res: Response) => {
    try {
      const newAction = new Action(req.body);
      const savedAction = await newAction.save();
      await Customer.findByIdAndUpdate(req.body.customer, {
        $push: { actions: savedAction._id },
      });
      res.status(201).json(savedAction);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  },
  getAction: async (req: Request, res: Response) => {
    try {
      const actionsSingleCustomer = await Action.findById(req.params.id);
      res.status(200).json(actionsSingleCustomer);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
  updateAction: async (req: Request, res: Response) => {
    try {
      const toBeUpdated = await Action.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json(toBeUpdated);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  deleteAction: async (req: Request, res: Response) => {
    try {
      const toBeDeleted = await Action.findOneAndDelete({ _id: req.params.id });
      res.status(200).json(toBeDeleted);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};
export default actionController;
