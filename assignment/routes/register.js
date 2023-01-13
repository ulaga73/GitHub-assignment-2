const express = require("express");
const User = require("../model/user");

const router = express.Router();

router.post("/", async(req, res) => {
    try{
        const user = await User.create(req.body);
        res.json({
            status:"success",
            data:user
        })
    }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }
    
})


module.exports = router;