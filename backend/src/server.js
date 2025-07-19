import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config();

const app = express();

//middleware
app.use(rateLimiter);
app.use(express.json());

// custom simple middleware
app.use((req, res, next) => {
  console.log("Hey we hit req, the method is", req.method);
  next();
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("it's working");
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running");
  });
});
