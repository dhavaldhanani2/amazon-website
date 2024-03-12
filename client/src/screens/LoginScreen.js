import { useState } from "react"
import apiHelper from "../commen/ApiHelper"
import { useNavigate } from "react-router-dom"

export default function LoginScreen({setUserInfo,setToken}){

    const[LoginDetails,setLoginDetails]= useState({
        email:"",
        password:""

    })
    const navigate = useNavigate()

    const LoginHandler =async()=>{
        try {
            const result = await apiHelper.userLogin(LoginDetails)
           if(result && result.data && result.data.userinfo && result.data.token){
            localStorage.setItem("userinfo",JSON.stringify(result.data.userinfo))
            localStorage.setItem("token",result.data.token)
            setUserInfo(result.data.userinfo)
            setToken(result.data.token)
            navigate("/")
           }
        } catch (error) {
            console.log(error);
        }
    }
  
    return(
        <>
        <div className="container pt-2 pb-3">
           <h3 className="fw-bold text-center" style={{textDecoration:"underline",textDecorationColor:"#ffc107"}}>amazon</h3>
           <hr className="mb-3"/>
           <div className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6">
                <div className="shadow rounded p-3">
                    <h5 className="fs-2 fw-normal mb-4 text-center">Sign In</h5>
                    <div className="row">
                    <div className="col-12 mb-2">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=> setLoginDetails({...LoginDetails,email:e.target.value})} type="text"id="email"className="input rounded"/>
                    </div>

                    <div className="col-12 mb-2">
                    <label htmlFor="password">Password</label>
                        <input onChange={(e)=> setLoginDetails({...LoginDetails,password:e.target.value})} type="text"id="password"className="input rounded"/>
                    </div>
                    <div className="col-12 mb-3">
                        <button onClick={LoginHandler} type="button" className="bg-gradient w-100 border border-secondary btn btn-warning">
                            Sign In
                        </button>
                    </div>

                    <div className="col-12 mb-3">
                        <div className="d-flex gap-1 justify-content-center align-items-center">
                            <hr className="d-block" style={{width:"2rem"}}/>
                            <i className="fw-normal" style={{fontSize:"0.9rem"}}>
                                No have an Account
                            </i>
                            <hr className="d-block" style={{width:"2rem"}}/>

                        </div>
                    </div>
                    <div className="col-12 mb-2">
                        <button onClick={() => navigate("/register")} className="bg-gradient w-100 border border-secondary btn btn-light">
                            Creat an Account
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
