import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello Sweeft");
});

server.listen(process.env.PORT || 8000);
