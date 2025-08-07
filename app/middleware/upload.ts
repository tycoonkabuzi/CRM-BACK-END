import { Request } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
// create uploadFolder

const uploadFolder = path.join(__dirname, "../upload");
fs.mkdir(uploadFolder, { recursive: true }, (err) => {
  if (err) {
    console.error("Unable to create the folder", err);
  } else {
    console.log("Folder created successfully", uploadFolder);
  }
});

// configure storage
const storage = multer.diskStorage({
  // destination of where the file will go
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, uploadFolder);
  },

  // create a file name
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// creating a variable holding our storage.
const upload = multer({ storage });

export default upload;
