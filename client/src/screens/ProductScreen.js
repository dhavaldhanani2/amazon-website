import { Link, useParams } from "react-router-dom"
import Rating from "../Componest/Rating"
import apiHelper from "../commen/ApiHelper"
import { useEffect, useState } from "react"

export default function ProductScreen(){
  const{id}=useParams()
   const[Product,SetProducts]=useState([])
 
  const getProduct = async()=>{
    try {
        const result = await apiHelper.fetchProductsById(id)
        

       SetProducts(result.data.products)
    } catch (error) { 

        console.log(error);
        
    }
  }

  useEffect(()=>{
    getProduct()
    // eslint-disable-next-line
  },[])



   
   
    return <>

    <h1>{Product.name}</h1>
    <Link to ={"/"} className = {"Link"}  style={{fontweight:"600"}}>Best to result</Link>

    <div className="container pt-2">
        <div className="row">
            <div className="col-12 col-lg-6 mb-2 mb-md-0">
                <img src={Product.Image} width={"80%"} style={{height:"60%"}}alt={Product.name}/>

            </div>
             <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-2 mb-0-sm">
                        <h4 className="fw-bold">
                            {Product.name}
                        </h4>
                        <div className="d-flex align-items-center mb-1">
                          <Rating rating={Product.rating}/>
                          <span>{Product.numReviews}reviews</span>
                        </div>

                        <p className="mb-1">Price :${Product.price}</p>
                        <p className="mb-1">Description:</p>
                        <p className="text-bold">heigh quality product</p>
                    </div>

                    <div className="col-12 col-lg-6 mb-2">
                        <div className="card-body card">
                            <div className="d-flex justify-content-between">
                                <h6>Price</h6>
                                <span>${Product.price}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Quantity</h6>
                                <select disabled={Product.countinstock <= 0} className="rounded">
                                    {
                                        [...new Array(Product.countinstock).keys()].map((x) =>{
                                            return<option value={x+1} key ={x+1}>{x+1}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="d-flex justify-content-between">
                                <h6>Status</h6>
                                <h6 className={Product.countinstock >0 ? "text-success" : "text-danger"}>{Product.countinstock > 0 ? "In Stock" : "Out of Stock"}</h6>
                            </div>
                            <button disabled ={Product.countinstock <=0} className="btn border border-secondary btn-warning w=100">Add to Cart</button>
                            <button disabled ={Product.countinstock <=0} className="btn border border-secondary btn-success mt-1 w=100">Buy Now</button>
                            
                        </div>
                    </div>
                </div>

             </div>
        </div>

        {

        }
    </div>
    
    </>
}