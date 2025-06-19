import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: String,
  address: { street: String, number: String, postCode: String },
  taxId: String,
  actions: [{ type: mongoose.Types.ObjectId, ref: "Action" }],
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
