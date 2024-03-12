

import './App.css';
import Footer from './Componest/Footer';                          
import Header from './Componest/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Register from './screens/Register';
import { useState } from 'react';




function App() {


  const[userInfo,setUserInfo]=useState(JSON.parse(localStorage.getItem("cardItems")  || "{}"))
  const[token,setToken]= useState(localStorage.getItem('token')|| "")


  return (
    <BrowserRouter>
     <div className="App">
      <Header setUserInfo={setUserInfo} setToken={setToken}userInfo={userInfo}token ={token}/>



      <main style={{ minHeight: "87.8vh" }}>

        <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/product/:id" element = {<ProductScreen/>} />
        <Route path='/login'element={<LoginScreen setUserInfo={setUserInfo} setToken={setToken} />}/>
        <Route path='/register'element={<Register/>}/>
      
        
        </Routes>
   
      </main>
      
      <Footer />



    </div>
    </BrowserRouter>
   
  );
}

export default App;
