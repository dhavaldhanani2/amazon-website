
const Usermodel = require("./UserModel")
const bcrypt = require("bcrypt")
const Jwt = require("jsonwebtoken")




class UserController {
    async InsertUser(req, res) {
        try {

            const password = bcrypt.hashSync(req.body.password, 8)
            if (!password) {
                return res.status(500).send({ message: "Somthing went wrong" })

            }


            const result = await Usermodel.create({ ...req.body, password: password })


            if (result) {
                return res.status(200).send({ Message: "Success", user: result })
            }

            return res.status(500).send({ Message: "Somthing went wrong" })
        } catch (error) {
            console.log(error);
            if (error && error && error.code === 11000) {
                return res.status(400).send({ Message: "Email is Allready Exist" })

            }

            return res.status(500).send({ Message: "internal server error" })

        }
    }

    async userLogin(req, res) {
        try {
            const { email, password } = req.body

            let result = await Usermodel.findOne({ email: email })
            if (!result) return res.status(400).send({ meassge: "Email not exist" })
            console.log(result);
            result = result._doc
            if (!bcrypt.compareSync(password, result.password)) {
                return res.status(400).send({ message: "Password and email are not Matched" })
            }
            delete result.password
            const token = Jwt.sign(result, process.env.JWT_SECRATE, {
                expiresIn: "30d"

            })
            result = {
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                password: result.password,
            }

            if (!token) return res.status(500).send({ message: "Somting went wrong" })
            return res.status(200).send({ message: "Success", userinfo: result, token: token })

        } catch (error) {
            console.log(error);
        }

    }
    async userRegister(req, res) {
        try {
            const { password } = req.body

            const enPassword = bcrypt.hashSync(password, 8)
            if (!enPassword) return res.status(500).send({ message: "Somthing went wrong" })
            req.body.password = enPassword
            let user = await Usermodel.create(req.body)
            if (!user) return res.status(500).send({ message: "Somthing went wrong" })
            user = user._doc
            delete user.password
            const token = Jwt.sign(user, process.env.JWT_SECRATE, {
                expiresIn: "30d"

            })
            if (!token) return res.status(500).send({ message: "Somthing went wrong" })
            return res.status(200).send({ message: "Success", userinfo: user, token: token })

        } catch (error) {


            console.log(error);
            if (error && error.code === 11000) {
                return res.status(400).send({ message: "Email is Allready Exist" })
            }

            return res.status(500).send({ message: "Internal server error" })

        }

    }
}
const userController = new UserController()
module.exports = userController