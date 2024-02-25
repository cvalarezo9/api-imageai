import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import imageAi from "./routes/imageAi.js";
import postRoutes from "./routes/postRoutes.js";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  })
});

app.use('/api/v1/imageai', imageAi);
app.use('/api/v1/posts', postRoutes);

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () => console.log("El servidore esta corriendo en el puerto http://localhost:8080"))
  } catch (error) {
    console.log(error);
  }
}

startServer();