const express = require("express")
const cors = require("cors")
const ConnectDb = require("./Conection")
const productController = require("./Product/ProductController.JS")
const userController = require("./User/UserController")
const env = require("dotenv")
require("dotenv").config()




const app = express()
ConnectDb()





app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({massage :"Success"})

})

app.get("/api/insertMany",productController.insert)

app.get("/api/product",productController.getProduct)
app.get("/api/product/:id",productController.getProductById)


app.post("/user",userController.InsertUser)
app.post("/api/user/login",userController.userLogin)
app.post("/api/user/register",userController.userRegister)


app.listen(5000 ,() =>{
    console.log("server started");
})