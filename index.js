import express from "express";
import reduceDOM from "./services/reduceDOMService.js";
import { PORT } from "./utils/env-variables.js";

const app = express();
app.use(express.json());

// Endpoint to get server status
app.get("/", (req, res) => {
  res.json({ message: "Server is Up and Running" });
});

// Endpoint to reduce HTML DOM
app.post("/reducer", reduceDOM);

app.listen(PORT, () => {
  console.log(`Server Ready At PORT: ${PORT}`);
});
