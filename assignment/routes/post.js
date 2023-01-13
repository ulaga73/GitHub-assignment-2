const express = require("express");
const Post = require("../model/post");

const router = express.Router();

router.get("/", async(req,res) => {
    try{
        const post = await Post.find();
        res.json({
            status:"success",
            data:post
        })
    }catch(e){
        res.status(404).json({
            status:"failure",
            message:e.message
        })
    }
})

router.post("/", async(req,res) => {
    try{
        const post = await Post.create(req.body);
        res.json({
            status:"success",
            data: post
        })
    }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }
    
})

router.put("/:postId", async(req,res) => {
    try{
        const update = await Post.updateOne({_id:req.params.postId}, {$set: {name: "Krishna"}});
        console.log(update)
        const post = await Post.findOne({_id:req.params.postId});
        res.json({
            status:"success",
            data:post
        })
    }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }
})

router.delete("/:postId", async(req,res) => {
    try{
        const deletePost = await Post.deleteOne({_id:req.params.postId});
        console.log(deletePost);
        const post = await Post.find();
        res.json({
            status:"success",
            data:post
        })
    }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }
})


module.exports = router;