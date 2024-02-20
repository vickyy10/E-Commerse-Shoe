import React, { useContext } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBNavbar,
    MDBContainer,
  } from 'mdb-react-ui-kit';
  import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './product.css'

import { useNavigate, useParams } from 'react-router-dom';
import { create } from '../App';



const Products = () => {
  const {products}=useContext(create)
  const nav=useNavigate()
  const {gender}=useParams()
  const filterprdct=products.filter((x)=>x.type==gender)
 
 
  

  return (


   
    

    <div className='main-main-div-products'>
       
    < div className='maindiv-products'>

     

      
     
        {filterprdct.map((x)=>{
          return(
            
            <MDBCard className='card' onClick={()=>nav(`/productview/${x.type}/${x.id}`)}  >
      <MDBCardImage  src={x.img} alt='...' className='prdctimg '/>
      <MDBCardBody>
        <MDBCardText>
         <h4>{x.name}</h4>
         <p>{x.type}'s shoe</p>
         <h6>MRP : {x.price}</h6>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
          )
        })}
       

     </div>
    </div>
  
   
  )
}

export default Products
