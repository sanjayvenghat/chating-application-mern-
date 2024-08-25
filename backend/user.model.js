import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
      
        trim: true, // Removes any leading or trailing whitespace
        lowercase: true // Optionally convert to lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 8 // Ensures passwords are at least 8 characters long
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"] // Restricts gender to specific values
    },
    profilepic: {
        type: String,
        default: "" // Default to an empty string if not provided
    }
},{timestamps:true});



const User = mongoose.model("User", userSchema);

export default User;
