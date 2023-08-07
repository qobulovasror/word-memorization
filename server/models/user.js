const mongoose = require('mongoose');
const Joi = require('joi') 
const config = require('config');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        reuqired: true,
        minlength: 1,
        maxlength: 150,
    },
    email: {
        type: String,
        reuqired: true,
        unique: true,
        minlength: 3,
        maxlength: 80,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "user",
        enum: ["admin", "user"]
    } 
});

UserSchema.methods.generateAuthToken = function(){
    let token = jwt.sign( {_id: this._id, role: this.role}, config.get("jwtAuthToken"))
    return token;
}

const User = mongoose.model('User', UserSchema);


const userRequirestValidate = (user)=>{
    const userValidateSchema = Joi.object({
        name: Joi.string().required().min(2).max(50),
        email: Joi.string().required().lowercase(),
        password: Joi.string().required().min(6),
        role: Joi.string().default("user")
    });
    return userValidateSchema.validate(user);
}

const authValidate = (req)=>{
    const userValidateSchema = Joi.object({
        email: Joi.string().required().min(4).max(35),
        password: Joi.string().required().min(6)
    });
    return userValidateSchema.validate(req);
}

module.exports = {
    User,
    userRequirestValidate,
    authValidate,
}