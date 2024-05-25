import React, { useContext, useRef } from 'react'
import "./signin.css"

import { create } from '../../App';
import { useNavigate,Link } from 'react-router-dom';

import Swal from 'sweetalert2';




const SignIn = () => {
  const inputref=useRef(null)
  const nav = useNavigate()
  const { userdetails,login,setlogin}=useContext(create)
  const submithandler=(e)=>{
    e.preventDefault()
    let Lusername=inputref.current.Lusername.value
    let Lpass=inputref.current.Lpass.value
    const finduser=userdetails.find((x)=>x.password==Lpass && x.username==Lusername)
    console.log(finduser);
    if(Lusername=="admin" && Lpass=="1234"){
      nav("/admin")
    }
    else{
      if( finduser){
        setlogin(finduser)
        
     nav('/')
     Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      showConfirmButton: false,
      timer: 1500,
    });
      }
      else{
        alert("password does not match")
      }
      }
    }
 
    
  return (
    <div className='Maindiv' >
      
        <div className='overlay'> </div>
        <img className='bg-image'  src="https://www.asphaltgold.com/cdn/shop/files/7781edb36627b53033c415728bd00c4e640c8090_DM0028_002_Nike_Air_Max_97_OG_Silver_Bullet_Metallic_Silver_University_Red_Black_sm_4_768x768_crop_center.jpg?v=1705319133" alt="" />
        <div  className='subdiv'  >
        <form ref={inputref} onSubmit={submithandler} >
           <div className='heading-div contaier ' ><h3 className='heading'  > Login</h3> <img onClick={()=>nav('/')} className='x-icon' style={{height:"40px",right:"13px",position:"absolute"}} src="https://cdn-icons-png.flaticon.com/128/7543/7543146.png" alt="" /></div>
      

           <div className='namediv' >
                    <input type="text" placeholder='Username' name='Lusername' className='name-field container' />
                 </div>
                 <div className='emaildiv' >
                 <input type="text" placeholder='Password'name='Lpass' className='pass-field container' />
                 </div>

<button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


<div className="text-center">
  <p style={{color:"white"}} >Not a member? <Link to="/joinus">Sign up</Link> </p>

</div>
</form>
        </div>
    </div>
  )
}

export default SignIn
