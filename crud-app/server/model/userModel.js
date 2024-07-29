import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    text:{
        type: String,
        // required: true
    }
})


export default mongoose.model("User", userSchema);