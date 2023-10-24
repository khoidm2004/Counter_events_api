const express = require("express");
const router = express.Router();
const counter = require("./counter");

router.get("/api/",(req,res)=>{
    res.send("OK");
});

router.post("/api/event-counter/increment",(req,res)=>{
    counter.increment();
    res.json({message:"Event Counter increased", count:counter.getEventCount});
});

router.post("/api/event-counter/reset-count",(req,res)=>{
    counter.resetEventCount();
    res.json({message:"Event Counter is reset", count:counter.resetEventCount});
});

router.get("/api/event-counter/get-count",(req,res)=>{
    res.json({Counter: counter.getEventCount()});
});

module.exports = router;
