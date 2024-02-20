import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./home.css"
import { useNavigate } from 'react-router-dom';


const Navbar1 = () => {
  const nav=useNavigate()


  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary- top-nav">
      <Container fluid style={{display:"flex", justifyContent:"end",}} >
       
          <div className='nav1' >
      <Nav.Link  className='join-us' onClick={()=>{nav("/joinus")} }    >  Join us  </Nav.Link>
      <Nav.Link style={{color:"white",paddingLeft:"2px",paddingRight:"2px"}} > | </Nav.Link>
      <Nav.Link className='join-us' onClick={()=>{nav("/signin")} }  > Login </Nav.Link>
      </div>
       
      
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navbar1
