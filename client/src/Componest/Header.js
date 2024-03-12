
import { Link, useNavigate } from "react-router-dom";

function Header({token,setUserInfo,setToken}){
  const navigate = useNavigate()


 const ClickToLogin =()=>{
  return navigate("/login")

 }


 const Logouthandler =()=>{
  localStorage.removeItem("userInfo")
  localStorage.removeItem("token")
  setUserInfo({})
  setToken()

 }

 
    return(
        <header className='bg-dark text-light px-3 d-flex align-items-center py-2 justify-content-between'>
      <div className='logo text-light fw-bold'>
        <Link to ={"/"} className ={"text-light"}>
          <h3 className='fw-bold'>amazon</h3>
          </Link>
          
      
      </div>

        <div className="search-container">
                <select className="search-select">
                    <option>All</option>
                    
                    
                    
                </select>
                <input type="text" class="search-input" />
                <div className="search-icon">
                <i class="bi bi-search"></i>
              
                </div>

            </div>


      <div className='d-flex gap-2 align-items-center text-light'>


    <i class="bi bi-cart-check-fill"></i>
        <span>Cart</span>
        <button 
        className="btn btn-warning fw-bold bg-gradient">{

       

       token? "Signout" : "SignIn"

        }</button>

             


      </div>

    </header>

    


    )
        
        
    
}



export default Header;