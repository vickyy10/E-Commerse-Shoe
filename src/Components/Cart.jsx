import React, { useContext } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import'./cart.css'
import { create } from '../App';


const Cart = () => {

  const {login,add,setAdd,render,setrender}=useContext(create)
  console.log(login);
 
  const increment = (x) =>{
      setAdd(x.qty+=1)
  }
   
  const decrement = (x) =>{
    setAdd(x.qty-=1)
}
const remove=(id)=>{
  const filterd=login.cart.filter((y)=>y.id !== parseInt(id)) 
    login.cart=filterd;
    setrender(!render)
}

const total=login.cart.reduce((acc,curr)=>acc+=curr.price*curr.qty,0)




  return (
    <div>
        <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"}} >Total price : {total}</h3>
    <div>
      
      {login.cart.map((x)=>(
        <div className='container'>
        <MDBRow >
          <div className='container'>
            <div className="main-div "  >
             
              <MDBCardImage style={{height:"200px",width:"200px", backgroundColor:"red",objectFit:"cover",marginRight:"100px"}}
                src={x.img}
                position="left"
                alt="Apple Computer"
              />
              <div>
                <div className='details-div' >
                  <MDBCardTitle>{x.name}</MDBCardTitle>
                  <div>{x.type}'s shoe</div>
                  <div>price : {x.price * x.qty} </div>
                  <div>quantity:  {x.qty} <button style={{width:"30px",marginRight:"10px"}} onClick={()=>increment(x)} >+</button>
                  <button style={{width:"30px"}} onClick={()=>decrement(x)} >-</button></div>
                  <img className='delete-icon' onClick={()=>remove(x.id)} src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png" alt="" />
                 
                </div>
                
              </div>
              
            </div>
            
          </div>
        </MDBRow>
      </div>
          
          
  

      ))}
       
     
   
    </div>
    </div>
    
  )
}

export default Cart
