import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiHelper from "../commen/ApiHelper"

export default function Register(){
    const navigate = useNavigate()

     const[registerDetails,setregisterDetails]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
     })

     const RegisterHandler =async() =>{
        try {
            const result = await apiHelper.userRegister(registerDetails)


           if(result.data && result.data.token && result.data.userinfo){
            localStorage.setItem("token",result.data.token)
            localStorage.setItem("userInfo",JSON.stringify(result.data.userinfo))
            navigate("/")

            return

           }
        } catch (error) {
            console.log(error);
            
        }
     }

    return(
        <>
          <div className="container pt-2 pb-3">
           <h3 className="fw-bold text-center" style={{textDecoration:"underline",textDecorationColor:"#ffc107"}}>amazone</h3>
           <hr className="mb-3"/>
           <div className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6">
                <div className="shadow rounded p-3">
                    <h5 className="fs-2 fw-normal mb-4 text-center">Sign Up</h5>
                    <div className="row">
                    <div className="col-12 mb-2">
                        <label htmlFor="fistName">FistName</label>
                        <input  type="text"id="fistName"onChange={(e) => setregisterDetails({...registerDetails,firstName:e.target.value})}  className="input rounded"/>
                    </div>

                    <div className="col-12 mb-2">
                    <label htmlFor="LastName">LastName</label>
                        <input  type="text"id="LastName"onChange={(e) => setregisterDetails({...registerDetails,lastName:e.target.value})}className="input rounded"/>
                    </div>
                    <div className="col-12 mb-2">
                    <label htmlFor="email">Email</label>
                        <input  type="text"id="email"onChange={(e) => setregisterDetails({...registerDetails,email:e.target.value})}className="input rounded"/>
                    </div>
                    <div className="col-12 mb-2">
                    <label htmlFor="password">Password</label>
                        <input  type="text"id="password"onChange={(e) => setregisterDetails({...registerDetails,password:e.target.value})}className="input rounded"/>
                    </div>
                    <div className="col-12 mb-3">
                        <button onClick = {RegisterHandler} className="bg-gradient w-100 border border-secondary btn btn-warning">
                        Creat an Account
                        </button>
                    </div>

                    <div className="col-12 mb-3">
                        <div className="d-flex gap-1 justify-content-center align-items-center">
                            <hr className="d-block" style={{width:"2rem"}}/>
                            <i className="fw-normal" style={{fontSize:"0.9rem"}}>
                                Allready have an Account
                            </i>
                            <hr className="d-block" style={{width:"2rem"}}/>

                        </div>
                    </div>
                    <div className="col-12 mb-2">
                        <button onClick={()=> navigate("/login")} className="bg-gradient w-100 border border-secondary btn btn-light">
                          Sign In
                        </button>
                    </div>


                        </div>                    
                </div>
            </div>

           </div>
           
        
        </div>
        </>
    )
        
        
    
}