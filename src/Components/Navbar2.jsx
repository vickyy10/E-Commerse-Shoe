import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./home.css"
import { useNavigate } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import Products from './Products';
import Footer from './Footer';
import ProductView from './ProductView';
import { create } from '../App';
import './navbar2.css'


const Navbar2 = () => {
    const nav=useNavigate()
    const {login,setlogin,searchdata,setsearchdata,products}=useContext(create)
 
  const search=(e)=>{
    e.preventDefault()
    const searched=products.filter((x)=>x.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if(searched){
    if(e.target.value.length==0){
      nav('/')
    }else{
      setsearchdata(searched)
      nav('/search')
    }
  }else{
    

  }
  }


    const logout=()=>{
      nav('/')
        setlogin([])
    }
    
    
  return (
    <div>
         <MDBNavbar sticky='top' light bgColor='light'>
        <MDBContainer fluid>
        <div><h1   onClick={()=>nav('/')} className='homeicon' >shoe store</h1></div>
        <div className='menudiv'>
          <span style={{paddingLeft:"10px"}}  > <Nav.Link className='h'  onClick={()=>nav("/product/men")} >MEN</Nav.Link></span>
       <span style={{paddingLeft:"10px"}} > <Nav.Link className='h'   onClick={()=>nav("/product/women")} >WOMEN</Nav.Link></span>
        <span style={{paddingLeft:"10px"}} ><Nav.Link className='h'   onClick={()=>nav("/product/kid")} >KIDS</Nav.Link></span>
        </div>

        <div className='rightnav'  ><input onChange={search}  type="search" placeholder='search... '   className='searchfield' />
       
       <div style={{width:"70px"}} className='icondiv' > 
       {(!login.username)?<img className='login-icon h' onClick={()=>nav("/signin")}  src="https://t3.ftcdn.net/jpg/02/61/90/28/240_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg" alt="" />:<span><img className='login-icon h' onClick={logout }  src="https://cdn-icons-png.flaticon.com/128/9650/9650243.png" alt="" /><span>{login.username}</span></span>}
       
        <img className='cart-icon h' onClick={()=>(!login.username)?nav('/signin'):nav("/cart")} src="https://cdn-icons-png.flaticon.com/128/25/25619.png" alt="" />
       
       </div>
       </div>
         
        </MDBContainer>
      </MDBNavbar>
      
    </div>
  )
}

export default Navbar2
