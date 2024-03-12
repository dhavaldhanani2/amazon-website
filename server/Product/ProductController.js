const productModel = require("./ProductModel")



const products = [
    {

        name: 'Levis shirt',
        category: 'shirt',
        Image: "../img/p1.jpg",
        price: 60,
        brand: 'Levis',
        rating: 5.2,
        numReviews: 5,
        countinstock: 6
    }, {

        name: 'Levis pant',
        category: 'pant',
        Image: "../img/p2.jpg",
        price: 50,
        brand: 'Nike',
        rating: 3.0,
        numReviews: 8,
        countinstock: 6
    }, {

        name: 'Slim shirt',
        category: 'Slim shirt',
        Image: "../img/s.jpg",
        price: 70,
        brand: 'Denim',
        rating: 2.5,
        numReviews: 7,
        countinstock: 6
    }, {

        name: 'Slim pant',
        category: 'pant',
        Image: "../img/v.jpg",
        price: 90,
        brand: 'Levis',
        rating: 4.5,
        numReviews: 9,
        countinstock: 6
    }
]
 class ProductController {
    

    async insert(req, res) {
        try {
            const result = await productModel.insertMany(products)
            console.log(result);
            if (!result) {
                return res.status(500).send({ message: "Somthing went wrong" })
            }
            return res.status(200).send({ message: "Success", result })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal server error" })
        }

    }




    async getProduct(req, res) {
        try {


            const result = await productModel.find({})

            if (result) {
                return res.status(200).send({ message: "Success", products: result })
            }
            return res.status(500).send({ message: "Somthing went wrong" })

        } catch (error) {

            return res.status(500).send({ message: "Internal server error" })


        }
    }

  async  getProductById(req, res) {
        try {
            const { id } = req.params
            const result = await productModel.findById({_id:id})
            if (result) {
                return res.status(200).send({ message: "Success", products: result })
            }
            return res.status(500).send({ message: "Somthing went wrong" })

        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })

        }


    }

}

const productController = new ProductController()
module.exports = productController 