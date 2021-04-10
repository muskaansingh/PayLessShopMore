const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required: true,
        maxlength:32,
        trim: true  // trim out extra spaces that comes up!
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userInfo :{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    salt: String,
    // role is basically either user, admin, tech team, etc.
    role: {
        type: Number,
        default:0 
    },
    purchases:{
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("User", userSchema)