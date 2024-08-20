import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter the name"]
    },
    
    email: {
        type: String,
        required: [true, "Please enter email"],
        validate: [validator.isEmail, "Please enter a valid email"],
      },
      subject: {
        type: String
      },
      comment: {
        type: String
      }
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
