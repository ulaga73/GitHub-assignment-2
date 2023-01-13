const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const postSchema = new Schema({
    title: String,
    bogy: String,
    name: String,
    user: {type: ObjectId, ref: "User"}
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;