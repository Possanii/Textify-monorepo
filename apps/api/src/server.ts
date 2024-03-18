import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(cors());

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

export default app;
