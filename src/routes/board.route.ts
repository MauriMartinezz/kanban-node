import express, { Response } from "express";

const router = express.Router();

router.get("/", (_req, res: Response) => {
  res.send("Fetching all entry boards");
});

router.post("/", (_req, res: Response) => {
  res.send("Creating board");
});

export default router;
