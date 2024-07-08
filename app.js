import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middleware/Error.js";
import cors from "cors";

config({
  path: "./config/config.env",
});

const app = express();


app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

import user from "./routes/userRoutes.js";

app.use("/api/v1/", user);

app.use(ErrorMiddleware);

export default app;
