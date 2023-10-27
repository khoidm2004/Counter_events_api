const express = require("express");
const router = express.Router();
const counter = require("./counter");

router.get("/",(req,res)=>{
    res.send("v1");
});

router.post("/increment",(req,res)=>{
    counter.increment();
    res.json({message:"Event Counter increased", count:counter.getEventCount});
});

router.post("/reset-count",(req,res)=>{
    counter.resetEventCount();
    res.json({message:"Event Counter is reset", count:counter.resetEventCount});
});

router.get("/get-count",(req,res)=>{
    res.json({Counter: counter.getEventCount()});
});

module.exports = router;
