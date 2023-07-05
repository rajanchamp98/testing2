import  express from "express";
import { createCustomer, getCustomer } from "../controller/customer.js";
import { createAccount,getAllAccounts } from "../controller/account.js";
import {  getAllTransaction, transactionWithAccountId } from "../controller/transaction.js";

//Customer Router
const customerRoute=express.Router();
const accountRoute=express.Router();
const transactionRoute=express.Router();

// Customer Router
customerRoute.get("/", getCustomer).post("/",createCustomer)

// Account Router
accountRoute.get("/",getAllAccounts).post("/",createAccount)

// Transaction Router
transactionRoute.get("/",getAllTransaction).get("/:id",transactionWithAccountId)










export {customerRoute,accountRoute,transactionRoute};