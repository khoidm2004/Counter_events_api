require("dotenv").config();
const express=require("express");
const app=express();
const apiV1=require("./route");

const PORT=parseInt(process.env.PORT, 10);
const HOST = process.env.HOST
const PROTOCOL=process.env.PROTOCOL !==undefined ? process.env.PROTOCOL:"http";
const BASE_URL=`${PROTOCOL}://${HOST}:${PORT}`;
const API_URL =`${BASE_URL}/api/v1`;

app.get("/",(req,res)=>res.send("v1"));
app.use('/api/v1',apiV1);

module.exports={
    app,
    PORT,
    HOST,
    PROTOCOL,
    BASE_URL,
    API_URL
};
