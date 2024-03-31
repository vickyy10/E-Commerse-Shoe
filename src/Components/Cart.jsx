import React, { useContext } from 'react'
import {
 
  MDBRow,

  MDBCardImage,
  MDBCardTitle,
 
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
    <div  >
        <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"}} >Total price : {total}</h3>
    <div>
      
      {login.cart.map((x)=>(
        <div key={x.id} className='container'>
        <MDBRow >
          <div className='container'>
            <div className="main-div "  >
             
              <MDBCardImage className='image-cart' 
                src={x.img}
                position="left"
                alt="Apple Computer"
              />
              <div>
                <div className='details-div' >
                  <MDBCardTitle>{x.name}</MDBCardTitle>
                  <div>{x.type}'s shoe</div>
                  <div>price : {x.price * x.qty} </div>
                  <div>quantity:  {x.qty} 
                  {/* <button style={{width:"30px",marginRight:"10px",borderRadius:"360px"}} onClick={()=>increment(x)} >+</button> */}
                  <img onClick={()=>increment(x)} style={{height:"30px",margin:"5px"}} src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="" />
                  <img onClick={()=>decrement(x)} style={{height:"30px",margin:"5px"}} src="https://cdn-icons-png.flaticon.com/128/561/561179.png" alt="" />
                  {/* <button style={{width:"30px",borderRadius:"360px"}} onClick={()=>decrement(x)} >-</button> */}
                  </div>
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
