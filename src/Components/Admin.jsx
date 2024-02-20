import React, { useContext,useRef,useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { create } from '../App';
import { items } from './items/Items';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
   MDBTooltip
} from 'mdb-react-ui-kit';

const Admin = () => {
  const [staticModal, setStaticModal] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [popoverModal, setPopoverModal] = useState(false);
  const [singleitem,setsingleitem]=useState()

  const toggleOpenedit = () => setPopoverModal(!popoverModal);
  const toggleOpen1 = () => setStaticModal(!staticModal);

  const toggleOpen = () => setBasicModal(!basicModal);
  const nav=useNavigate()
  const {products,userdetails,login,setproduct}=useContext(create)

 
  
  const inputref=useRef()
  const imgref = useRef()
  const nameref = useRef()
  const priceref = useRef()
  const genderref = useRef()

  const submit=(e)=>{
   e.preventDefault()
   let img=inputref.current.imgurl.value
   let name=inputref.current.shoename.value
   let type=inputref.current.gender.value
   let price=inputref.current.price.value
   const newprdct={name:name,img:img,type:type,price:price}
   setproduct([...products,newprdct])
}

  

  const remove=(id)=>{
    let removedprdct=products.filter((x)=>x.id !==id)
    setproduct(removedprdct)
  }
 
 
  const logout=()=>{
    nav('/')
      
  }

 
  console.log(products);

  const editSubmit = (e) =>{
    e.preventDefault()
    

    const editedItem = products.map((x)=>x.id==singleitem.id ?{
      ...x,
      name:nameref.current.value,
      type:genderref.current.value,
      price:priceref.current.value,
      img:imgref.current.value
    }:x )

    setproduct(editedItem)
  console.log(editedItem);
    
  }


  
  return (
    <div style={{width:"100%", backgroundColor:"#00008B+" }} >
      <div style={{height:"60px",width:"100%", display:"flex", justifyContent:"space-between",alignItems:"center",padding:"10px",backgroundColor:"#000080",color:"white"}} >
        <div><h6>shoe store</h6></div>
        <div><h3>ADMIN</h3></div>
        <div><img style={{height:"40px"}} className='h' onClick={logout} src="https://cdn-icons-png.flaticon.com/128/5509/5509651.png" alt="" />
        </div>

      </div>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-4"
      style={{backgroundColor:"white"}}
    >
      <Tab eventKey="USERS" title="USERS"   >
        <div style={{width:"100%",padding:"10px", height:"100vh" }} >
       {userdetails.map((x,index)=>{
        return(
          <div style={{width:"100%",height:"100px",boxShadow:"0px 0px 3px 3px grey",marginTop:"10px", borderRadius:" 10px",padding:"10px",display:"flex",justifyContent:"space-between", backgroundColor:"#12ed6a" }} >
          <div>
          <h6> id :{index+1}</h6>
          <h6> userName : {x.username}</h6>
          <h6> password : {x.password}</h6>
          </div>
          <div>
            <button onClick={toggleOpen1}  style={{width:"60px",borderRadius:"5px",height:"30px",border:"0px",backgroundColor:'#3734d5',color:"white",fontWeight:"bold"}}  >cart</button>
          </div>
        </div>
        )
       })}
       </div>
      </Tab>
      <Tab eventKey="profile" title="Products" >
      <div style={{width:"99%",display:"flex",justifyContent:"center"}} ><button onClick={toggleOpen}  style={{height:"35px",width:"120px",borderRadius:"10px",border:"0px",backgroundColor:'#3734d5',color:"white",fontWeight:"bold"}} >Add Product</button></div>
        
     {products.map((x)=>{
      return(
        <div style={{width:"99%",boxShadow:"0px 0px 3px 3px grey",backgroundColor:"white",margin:"10px" ,display:"flex",alignContent:"center",justifyContent:"space-between", borderRadius:" 10px",padding:"10px" }} >
          
          <div style={{display:"flex"}}  > <img style={{height:"100px",borderRadius:"10px"}} src={x.img} alt="" /> 
            <div style={{marginLeft:"10px"}} >
                <h6>{x.name}</h6>
                <h6>{x.type}'s shoe</h6>
                <h6>MRP : {x.price}</h6>
             </div>
             
          </div>
         <div style={{width:"100px",height:"90px",display:"grid",alignItems:"center",justifyContent:"center"}} >
             <button style={{width:"60px",borderRadius:"5px",height:"30px",border:"0px",backgroundColor:'#3734d5',color:"white",fontWeight:"bold"}} onClick={()=>{{toggleOpenedit();setsingleitem(x)}}} >Edit</button>
              <button  hover style={{width:"70px",borderRadius:"5px",height:"30px",border:"0px",backgroundColor:'#eb1919',color:"white",fontWeight:"bold"}} onClick={()=>remove(x.id)} >remove</button>
             </div>
         
        </div>
        
      )
     })}
      </Tab>
    </Tabs>


{/*--------------------------------- modal--------------------------------------------- */}

      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Product</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
             <form ref={inputref} onSubmit={submit}>
            <MDBModalBody>
         
            <div style={{paddingTop:"10px"}} >
          <div   >
      <MDBInput label='Image URL' id='ImageURL' type='text' size='lg' name='imgurl' />
        </div>
        <div style={{marginTop:"10px"}}>
      <MDBInput label='Shoe name' id='Name' type='text' size='lg' name='shoename'  />
        </div>
        <div style={{marginTop:"10px"}}>
      <MDBInput label='Gender' id='Gender' type='text' size='lg' name='gender' />
        </div>
        <div style={{marginTop:"10px"}}>
      <MDBInput label='Price' id='price' type='text' size='lg' name='price' />
        </div>
        </div>
          

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={()=>{toggleOpen()}} type='submit'  >Add Product</MDBBtn>
            </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      {/* cart modal */}
      

      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cart</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen1}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><div style={{width:"100%"}} >
            {
    userdetails[0] && userdetails.map((x) => (
        <>
        
            {x.cart.map((a) => (
                <div style={{ width: "100%", height: "100px", backgroundColor: "lightblue", display: "flex", marginTop: "10px", padding: "10px" }}>
                    <div><img style={{ height: "100px", borderRadius: "10px" }} src={a.img} alt="" /></div>
                    <div style={{ marginLeft: "10px" }}>
                        <p>{a.name}</p>
                        <p>{a.price}</p>
                    </div>
                </div>
            ))}
        </>
    ))
}

              </div></MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen1}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      {/* -----------------------------------edit modal--------------------------------- */}
      <MDBModal tabIndex='-1' open={popoverModal} setOpen={setPopoverModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpenedit}></MDBBtn>
            </MDBModalHeader>
            <form onSubmit={editSubmit}>
            <MDBModalBody>
            <div style={{width:"100%"}} >
            <div style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}} ><MDBInput ref={imgref} required label='Image URL' id='form1' type='text' />
</div>
               
               <div style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}} ><MDBInput ref={nameref} required  label='Name' id='form1' type='text'  />
</div>
               <div style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}  ><MDBInput ref={genderref} required label='Gender' id='form1' type='text' />
 </div>
               <div style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}  ><MDBInput  ref={priceref} required label='Price' id='form1' type='text' />
 </div>

            </div>
            
            </MDBModalBody>
           


            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpenedit}>
                Close
              </MDBBtn>
              <MDBBtn type='submit' onClick={toggleOpenedit}>Save changes</MDBBtn>
            </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      
    </div>
  )
}

export default Admin
