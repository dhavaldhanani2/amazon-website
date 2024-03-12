const mongoose  = require("mongoose");




class ProductModel{
    constructor(){
        this.schema = new mongoose.Schema({
            name:{type:String,require:true},
            category:{type:String,require:true},
            Image:{type:String,require:true},
            price:{type:Number,require:true},
            brand:{type:String,require:true},
            rating:{type:Number,require:true,default:2},
            numRevies:{type:Number,require:true},
            countInStock:{type:Number,require:true},
        })
    }
}

const Product = new ProductModel()
const productModel =mongoose.model("tbl_products",Product.schema)


module.exports = productModel