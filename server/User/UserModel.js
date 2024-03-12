const mongoose= require("mongoose");

class UserModel{
    constructor(){
        this.schema =new mongoose.Schema({
            firstName:{type:String, required:true},
            lastName:{type:String, required:true},
            email:{type:String, required:true, unique:true},
            phone:{type:Number, default:true},
            password:{type:String, required:true},
            isAdmin:{type:Boolean, default:false},
        },{
            timestemps:true
        })
    }
}

const User =new UserModel()
const Usermodel = mongoose.model("tb1_users",User.schema)
module.exports = Usermodel