import React, { useContext, useState } from 'react'
import { create } from '../App'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBNavbar,
  MDBContainer,
} from 'mdb-react-ui-kit';


const Search = () => {
 const {searchdata} = useContext(create)

   
   
  return (
    <div className=' maindiv' >
      {searchdata?searchdata.map((x)=>(<MDBCard className='card'>
      <MDBCardImage  src={x.img} alt='...' className='prdctimg '/>
      <MDBCardBody>
        <MDBCardText>
         <h4>{x.name}</h4>
         <p>{x.type}'s shoe</p>
         <h6>MRP : {x.price}</h6>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>)):<h1 style={{marginTop:"10px"}}>No data</h1>}
      
    </div>
  )
}

export default Search
