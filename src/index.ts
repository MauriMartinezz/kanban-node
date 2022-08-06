import express from "express";

const app = express();
app.use(express.json()); // Middleware that transform req.body to JSON

import boardRouter from "./routes/board.route";

const PORT = 3000;

// _ tells typescript to ignore a parameter
// also can be _res to ignore the request parameter
app.get("/ping", (_req, res) => {
  console.log("Someone pingend here!");
  res.send("pong");
});

app.use("/api/board", boardRouter);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} on ${new Date().toLocaleDateString()}`
  );
});
