import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./route/Route.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app =  express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",Routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.listen(8000,()=>console.log("Server is running on Port 8000"));
