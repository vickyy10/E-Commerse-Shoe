import React, { useContext } from 'react'
import {
    MDBCard,
    MDBCardBody,
   
    MDBCardImage,
   
  } from 'mdb-react-ui-kit';
  


import './product.css'

import { useNavigate, useParams } from 'react-router-dom';
import { create } from '../App';



const Products = () => {
  const {products}=useContext(create)
  const nav=useNavigate()
  const {gender}=useParams()
  const filterprdct=products.filter((x)=>x.type==gender)
 
 
  

  return (


   
    

    <div  key={products.id} className='main-main-div-products'>
       
    < div key={products.id} className='maindiv-products'>

     

      
     
        {filterprdct.map((x)=>{
          return(
            
            <MDBCard  key={x.id} className='card' onClick={()=>nav(`/productview/${x.type}/${x.id}`)}  >
      <MDBCardImage  src={x.img} alt='...' className='prdctimg '/>
      <MDBCardBody>
        <div>
         <h4>{x.name}</h4>
         <p>{x.type}'s shoe</p>
         <h6>MRP : {x.price}</h6>
        </div>
      </MDBCardBody>
    </MDBCard>
          )
        })}
       

     </div>
    </div>
  
   
  )
}

export default Products
