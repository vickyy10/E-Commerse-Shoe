import React, { useContext, useRef } from 'react'
import'./joinus.css'
import { Link, useNavigate } from 'react-router-dom';
import { create } from '../../App';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const JoinUs = () => {

  const { userdetails,setuserdetails}=useContext(create)
  const inputref=useRef(null)

  const nav=useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault();
    let username=inputref.current.username.value
    let password=inputref.current.password.value
    let cPassword=inputref.current.cPassword.value
     
    if(password===cPassword)

    {

      setuserdetails([...userdetails,{username:username,password:password,cPassword:cPassword,cart:[]}]) 
      toast.success("Login successful!"); 
     
        
       
         nav('/signin')
    
   
    }else
    {
      alert("password doesnot match")
    }

   
  }
  console.log(  userdetails);

  

  
  
  return (
    <div className='Maindiv' >
    <div className='overlay'></div>
    <img className='bg-image'  src="https://sneakerlounge.au/cdn/shop/files/Close3_6adc3b21-5778-45cb-9e80-86e9ea6231ab.jpg?v=1692322835&width=2000" alt="" />
    <div  className='subdiv'  >
    <form ref={inputref} onSubmit={submitHandler}>
       <div className='heading-div contaier ' ><h3 className='heading'  >sign up</h3></div>
  

       <div className='namediv' >
                <input type="text" placeholder='Username' name='username'  className='name-field container' />
             </div>
             <div className='emaildiv' >
             <input type="text" placeholder='Password' name='password'   className='pass-field container' />
             </div>
             <div className='emaildiv' >
             <input type="text" placeholder='ConfirmPassword' name='cPassword'   className='pass-field container' />
             </div>

<button  type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>

</form>
<div className="text-center">
<p style={{color:"white"}} >Login here <Link to="/signin">Login</Link></p>

</div>

    </div>
</div>
   

  )
}

export default JoinUs
