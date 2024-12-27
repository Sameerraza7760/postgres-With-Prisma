import express from "express";

const app = express();

const Port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Hello Its working .." });
});

app.listen(Port, () => console.log(`Server is running on Port ${Port}`));
