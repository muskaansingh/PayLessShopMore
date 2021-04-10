const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const uuid = require('uuid/v1');

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
    encrypt_password:{
        type: String,
        required: true
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

userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv1();
        this.encrypt_password = this.securePassword(password);
    })
    .get(function(){
        return this._password;
    })

userSchema.method = {

    authenticate: function(plainPassword){
        return {
            this.securePassword(plainPassword) === this.encrypt_password
        }
    },

    securePassword: function(plainPassword){
        if(!password) {
            return ""
        }
        try {
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex')            
        } catch (err) {
            return ""
        }
    }
}

module.exports = mongoose.model("User", userSchema)