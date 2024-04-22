import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());

app.use(
  fileUpload({
    limits: { fileSize: 1024 * 1024 * 20 },
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
);

app.use(cors());

export default app;
