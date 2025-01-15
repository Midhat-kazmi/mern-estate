import { time } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    },{timestamps: true});  // used to record the time of creation and last update of a document

const User = mongoose.model('User', userSchema); // when we have more than one user mongo db will automatical
// ly pluralize the name of the model and create a collection of users

export default User; // export the User model to be used in other files 