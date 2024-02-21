import React, { useContext,useState } from 'react'

import {
   
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalFooter,
    MDBModalBody,
    MDBModalTitle
  } from 'mdb-react-ui-kit';
 
  import './productview.css'
  


import { create } from '../App';
import { useNavigate, useParams } from 'react-router-dom';



const ProductView = () => {
 

  const [cartqty,setcartqty]=useState(0)

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleOpen = () => setTopRightModal(!topRightModal);

  const nav=useNavigate()
  const {products,userdetails,setuserdetails,login,setlogin}=useContext(create)
  const {id}=useParams()
  const productview=products.find((x)=>x.id==id);
  console.log(productview);
console.log(login.cart);



  const addtobag =()=>{
    if(login.username){

    toggleOpen()
    setcartqty(cartqty=>cartqty+1)

 
    let cartdata=login.cart.find((items)=>items.id==productview.id)
    
    if(!cartdata){
      login.cart.push(productview)
      
      
    }
    else{
      productview.qty +=1
    } 
  
  }else{
    nav('/signin')
  }
}

 
 






   
  return (
   
    <div style={{width:"100%", display:"flex",padding:"20px", flexWrap:"wrap"}} >
         <div className='img-div' style={{width:"525px",height:"510px",display:"flex",alignItems:"center"}} >
  <img className='img' style={{width:"525px",objectFit:"cover",}} src={productview.img}  alt='...' />
  </div> 
        
  <div className='details' style={{  height:"470px",paddingLeft:"200px",width:"700px", paddingTop:"30px"   }} >
  <h4>{productview.name}'s shoe</h4>
         <h6>{productview.type}'s shoe</h6>
        <h6> MRP :{productview.price}</h6>
        <h6>incl. of taxes</h6>
        <h6>(Also includes all applicable duties)</h6>

          <div style={{marginBottom:"3px"}}  >Select Size</div>

        <div style={{width:"320px",height:"185px",backgroundColor:"white"}} >
          <div style={{display:"flex"}} >
          <div className='Chart-div' >UK 6.5</div>
         <div className='Chart-div'  >UK 7</div>
         <div className='Chart-div' >UK 7.5</div>
         </div>
         <div style={{display:"flex"}} >
         <div className='Chart-div' >UK 8</div>
         <div className='Chart-div' >UK 8.5</div>
         <div className='Chart-div' >UK 9</div>
         </div>
         <div style={{display:"flex"}} >
         <div className='Chart-div' >UK 9.5</div>
         <div className='Chart-div' >UK 10</div>
         <div className='Chart-div' >UK 10.5</div>
         </div>
         <div style={{display:"flex"}} >
         <div className='Chart-div'>UK 11</div>
         <div className='Chart-div' >UK 11.5</div>
         <div className='Chart-div' >UK 12</div>
         </div>
         <div style={{height:"100px", display:"flex",justifyContent:"center",alignItems:"center" }} >
          <button className='add-to-bag-btn' style={{width:"320px",height:"55px",borderRadius:"360px", color:"white", fontWeight:" bold", backgroundColor:'black', border:"0px" }} onClick={addtobag} >Add To Bag</button>
         </div>
         
       
        </div>
     </div>
    
  
  
   

      

      {/* /----------------modal------------ */}

         
          
           
              <MDBModal
               key="modal1" 
              animationDirection='right'
              open={topRightModal}
              tabIndex='-1'
              setOpen={setTopRightModal}
            >
              <MDBModalDialog >
                <MDBModalContent>
                  <MDBModalHeader className='bg-black text-white'>
                    <MDBModalTitle>Product in the cart</MDBModalTitle>
                    <MDBBtn
                      color='none'
                      className='btn-close btn-close-white'
                      onClick={toggleOpen}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className='row'>
                      <div className='col-3'>
                       <img style={{height:"110px"}}  src={productview.img} alt="" />
                      </div>
            
                      <div className='col-9'>
                        <p style={{fontWeight:"bolder"}} >{productview.name}</p>
                        <p>{productview.type}'s shoe</p>
                        <p> MRP : {productview.price}</p>
                      </div>
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn className='viewbag' onClick={()=>nav('/cart')} >View bag ({cartqty})</MDBBtn>
                    <MDBBtn  color='bg-black' onClick={toggleOpen}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            
            
      
      
    </div>
  )
}

export default ProductView
