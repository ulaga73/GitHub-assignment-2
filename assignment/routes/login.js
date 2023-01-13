const express = require('express');
const User = require("../model/user");

const router = express.Router();

router.post("/", async(req,res) => {
    try{
        const {email, password} = req.body;
        const user = await User.find({email, password});
        if(user.length){
            res.json({
                status:"success",
                data:user
            })
        }else{
            res.status(404).json({
                status:"failure",
                message: "User is not found"
            })
        }
    }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }
    
})


module.exports = router;