import { useEffect, useState } from "react"
import ProductCard from "../Componest/ProductCard"
import apiHelper from "../commen/ApiHelper"



export default function HomeScreen() {
 const[products,SetProducts] = useState([])

 

 
const GetProduct =async()=>{
    try {
        const result =await apiHelper.fetchProducts()
        console.log(result)
        SetProducts(result.data.products)

        } catch (error) { 

            console.log(error);
        
    }
    
}

useEffect(() =>{
    GetProduct()

},[])
  




    return (
        <div className="container py-4 ">
            <h5>Feture Products</h5>
        
            <div className="d-flex gap-5 flex-wrap justify-content-center  justify-content-md-start">
                {products.map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                })}

            </div>
        </div>

    )
}