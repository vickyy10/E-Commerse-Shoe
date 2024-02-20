import React, { createContext, useEffect, useState } from "react"
import Home from "./Components/Home"
import { Routes,Route, useLocation } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import JoinUs from "./Components/Sign up & log in/JoinUs"
import SignIn from "./Components/Sign up & log in/SignIn"
import Footer from "./Components/Footer";
import { items } from "./Components/items/Items";
import Products from "./Components/Products";
import ProductView from "./Components/ProductView";
import Cart from "./Components/Cart";
import Navbar2 from "./Components/Navbar2";
import Navbar1 from "./Components/Navbar1";
import Search from "./Components/Search";

import Admin from "./Components/Admin";





export const create=createContext()


function App() {

  // login & sighnup state

  const[userdetails,setuserdetails]=useState([])
  const [locationAuth,setLocationAuth] = useState(false)
  const [login,setlogin]=useState([])
  const [add,setAdd] = useState(0)
  // product state
  const[products,setproduct]=useState(items)

  // cart state

  const [cart,setcart]=useState([])

  // search data
  const [searchdata,setsearchdata]=useState(null)

  // fake render
  const [render,setrender]=useState(false)

  const location = useLocation()
  

 useEffect(() => {
   if (location.pathname.includes('/admin') || location.pathname.includes('/signin') || location.pathname.includes('/joinus')  ){
    setLocationAuth(true)
   }else{
    setLocationAuth(false)
   }
 }, [location,login])
 

  return (
    <>
    
   
   
   
    <create.Provider  value={{userdetails,setuserdetails,products,cart,setcart,login,setlogin,searchdata,setsearchdata,add,setAdd,render,setrender,setproduct}} >

    {(login.username===undefined & locationAuth)?null:login.username===undefined?<Navbar1/>:null}
    {!locationAuth&&<Navbar2/>}
   
    <Routes>

    <Route path="/" element={ <Home/>} />
    <Route  path="/joinus" element={<JoinUs />} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/product/:gender" element={<Products/>} />
    <Route path="/productview/:gender/:id" element={<ProductView/>} />
    <Route path="/cart" element={ <Cart/>} />
   <Route path="/search"  element={<Search/>} />
  
   <Route path="/admin"  element={<Admin/>}/>


  
    </Routes>
     
    {!locationAuth&&<Footer/>}
    </create.Provider>


    {/* ---------------footer-------------- */}
   
       
    </>
  )
}

export default App
