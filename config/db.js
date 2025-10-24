const mongoose = require("mongoose")
const env = require("dotenv").config()

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb