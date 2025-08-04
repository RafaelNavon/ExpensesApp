import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummaryByUserId,
  getSummaryOfCategories,
  getTransactionsByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getSummaryByUserId);

router.get("/summary/category/:userId", getSummaryOfCategories);

export default router;
