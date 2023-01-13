const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String, required: true}
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;