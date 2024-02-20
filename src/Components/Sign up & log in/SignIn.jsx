import React, { useContext, useRef } from 'react'
import "./signin.css"
import { MDBInput } from 'mdb-react-ui-kit';
import { create } from '../../App';
import { useNavigate,Link } from 'react-router-dom';
import Admin from '../Admin';
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
        <div className='overlay'></div>
        <img className='bg-image'  src="https://sneakerlounge.au/cdn/shop/files/Close3_6adc3b21-5778-45cb-9e80-86e9ea6231ab.jpg?v=1692322835&width=2000" alt="" />
        <div  className='subdiv'  >
        <form ref={inputref} onSubmit={submithandler} >
           <div className='heading-div contaier ' ><h3 className='heading'  > Login</h3></div>
      

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
