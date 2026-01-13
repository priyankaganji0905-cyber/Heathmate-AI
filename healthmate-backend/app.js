import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/chat", chatRoutes);


app.get("/", (req, res) => {
  res.send("HealthMate backend is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
