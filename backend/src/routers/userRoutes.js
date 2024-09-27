import express from "express";

const router = express.Router();

router.get("/ping", (req,res)=>{
    return res.send('hellooo')
});

export default router;
