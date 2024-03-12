const { default: mongoose } = require("mongoose")

const ConnectDb = async() =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/amazon")

        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Loss");
    }

}
module.exports=ConnectDb