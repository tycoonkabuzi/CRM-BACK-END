import express from "express";

import actionRoute from "./routes/actionsRoute";
import customerRoute from "./routes/customerRoute";
import path from "path";
import cors from "cors";
const app = express();

import mongoose from "mongoose";

const PORT = 8080;
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crm"); // we connect to our database
mongoose;
app.use(cors());
app.use("/customers", customerRoute);
app.use("/actions", actionRoute);

app.use(
  "/uploadProfile",
  express.static(path.join(process.cwd(), "../uploads"))
);
app.listen(PORT, () => {
  console.log("The server started");
});
//
