require("dotenv").config();
const express=require("express");
const app=express();
const apiV2=require("./route");

const PORT=parseInt(process.env.PORT, 10);
const HOST = process.env.HOST
const PROTOCOL=process.env.PROTOCOL !==undefined ? process.env.PROTOCOL:"http";
const BASE_URL=`${PROTOCOL}://${HOST}:${PORT}`;
const API_URL =`${BASE_URL}/API/v2`;

app.get("/",(req,res)=>res.send("v2"));
app.use('/API/v2',apiV2);

module.exports={
    app,
    PORT,
    HOST,
    PROTOCOL,
    BASE_URL,
    API_URL
};
