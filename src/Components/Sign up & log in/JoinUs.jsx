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
    <img className='bg-image'  src="https://www.asphaltgold.com/cdn/shop/files/7781edb36627b53033c415728bd00c4e640c8090_DM0028_002_Nike_Air_Max_97_OG_Silver_Bullet_Metallic_Silver_University_Red_Black_sm_4_768x768_crop_center.jpg?v=1705319133" alt="" />
    <div  className='subdiv'  >
    <form ref={inputref} onSubmit={submitHandler}>
       <div className='heading-div contaier ' ><h3 className='heading'  >sign up</h3> <img onClick={()=>nav('/')} style={{height:"40px",right:"13px",position:"absolute"}} src="https://cdn-icons-png.flaticon.com/128/7543/7543146.png" alt="" /></div>
  

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
<p style={{color:"white"}} >Already have an account. <Link to="/signin">Login here</Link></p>

</div>

    </div>
</div>
   

  )
}

export default JoinUs
