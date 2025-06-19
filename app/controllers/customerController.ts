import { Request, Response } from "express";
import Customer from "../models/customerModel";

const customerController = {
  index: async (req: Request, res: Response) => {
    try {
      const aCustomer = await Customer.find({});
      res.status(201).json(aCustomer);
    } catch (error) {}
  },
  addCustomer: async (req: Request, res: Response) => {
    try {
      const newCustomer = new Customer(req.body);
      newCustomer.save();
      res.status(200).json(newCustomer);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  getSingleCustomer: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const singleCustomer = await Customer.findById(id).populate("actions");

      res.status(200).json(singleCustomer);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  },

  deleteCustomer: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const toBeDeleted = await Customer.findByIdAndDelete(id);
      res.status(202).json(toBeDeleted);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  updateCustomer: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const toBeUpdated = await Customer.findByIdAndUpdate(id, req.body);
      res.status(201).json(toBeUpdated);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  },
};
export default customerController;
