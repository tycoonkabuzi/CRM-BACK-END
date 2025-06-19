import express from "express";
<<<<<<< HEAD
import actionRoute from "./routes/actionsRoute";
import customerRoute from "./routes/customerRoute";
=======
>>>>>>> f45c4940ded80fad8e2f382053cc71cde62d51bc
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
app.listen(PORT, () => {
  console.log("The server started");
});
//
