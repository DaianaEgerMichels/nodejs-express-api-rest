import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Node.js course");
});

export default app;