import React, { useContext } from 'react'
import { create } from '../App'
import './search.css'
import {
  MDBCard,
  MDBCardBody,
 
  MDBCardText,
  MDBCardImage,

} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const nav=useNavigate()
 const {searchdata} = useContext(create)

   
   
  return (
    <div className=' maindiv-search' >
      {searchdata?searchdata.map((x)=>(<MDBCard key={x.id} className='card' onClick={()=>nav(`/productview/${x.type}/${x.id}`)} >
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
