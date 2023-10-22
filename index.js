import express from "express";
import reduceDOM from "./services/reduceDOMService.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Endpoint to get server status
app.get("/", (req, res) => {
  res.json({ message: "Server is Up and Running" });
});

// Endpoint to reduce HTML DOM
app.get("/reducer", reduceDOM);

app.listen(PORT, () => {
  console.log(`Server Ready At PORT: ${PORT}`);
});
