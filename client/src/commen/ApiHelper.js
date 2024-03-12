import axios from "axios";

class ApiHelper{
    constructor(){
        this.baseUrl ="http://localhost:5000/api"
    }

    fetchProducts(){
        return axios.get(`${this.baseUrl}/product`)
    }
    fetchProductsById(id){
        return axios.get(`${this.baseUrl}/product/${id}`)
    }

    userLogin(loginDetails){
        return axios.post(`${this.baseUrl}/user/login`,loginDetails)
    }

    userRegister(registrDetails){
        return axios.post(`${this.baseUrl}/user/register`,registrDetails)
    }

}

const apiHelper =new ApiHelper()
export default apiHelper