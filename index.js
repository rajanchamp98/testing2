import express from "express"
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import { customerRoute,accountRoute, transactionRoute} from "./Router/Routes.js"

dotenv.config()


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.CONNECTION);
  console.log("Database Connected Sucessfully :")
}


const app=express();
app.use(express.json());



// app.use("/",(req,res)=>{
//     res.send("Hi This is Account Api Building")
// })
app.use("/customers",customerRoute)
app.use("/accounts",accountRoute)
app.use("/transactions",transactionRoute)




app.listen(process.env.PORT);
