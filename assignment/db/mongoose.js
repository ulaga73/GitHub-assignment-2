const mongoose  = require("mongoose");

async function dbServer(){
    await mongoose.connect("mongodb://localhost:27017/assignment");
    console.log("Database is running successfully...")
}

module.exports = dbServer;