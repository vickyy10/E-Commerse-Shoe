import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import Products from "./Products";
import Footer from "./Footer";
import ProductView from "./ProductView";
import { create } from "../App";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import myVideo from './items/vid.mp4'

const Home = () => {
  const nav = useNavigate();
  const { login } = useContext(create);
  return (
    <div>

    
     

      <div className=" body-div ">
        <div className="main-main-img-div">

        <div className="  main-img-div ">
          <div className="text-div">
            <a href="#menwomen">
              {" "}
              <button className="shop-btn">Shop now &#11183;</button>
            </a>
          </div>
          <img
            className="image1"
            src="https://media.gq.com/photos/59e779eab2ac1f76b03c344c/master/pass/zoomfly-sp-sneak-of-the-week.gif"
            alt=""
            />
        </div>
           
         </div>
         <div style={{display:"flex",justifyContent:"center"}} >
        <div className="text1-div">
          <h3>Featured</h3>
        </div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}} >
        <div id="menwomen" className="card-div ">
          <div  className="shop-img1-div">
            
            <img
              className="shop-img2"
              src="https://www.asphaltgold.com/cdn/shop/files/c50a0110c6df14039580f2dba53ea5f539efbd51_FB8971_100_Nike_Air_Force_1_07_LV8_White_White_Dark_Marina_Blue_sm_2_768x768_crop_center.jpg?v=1706103713"
              alt=""
            />
          </div>
          <div className="shop-img2-div">
            <img
              className="shop-img2"
              src="https://cdn.shopify.com/s/files/1/0244/4912/2367/files/361513866_247700281354711_5655205493695015595_n.jpg?v=1690547643"
              alt=""
            />
          </div>
        </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}} >
        <div className=" text2-div">
          <h3>Trending</h3>
        </div> 
        </div>
        <div style={{display:"flex",justifyContent:"center"}} >
        <div className=" vid2-div">
          <video style={{objectFit:'cover', width:"100%",height:"600px"}} autoPlay loop muted>
            <source src={myVideo} type='video/mp4'></source>
          </video>
          </div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}} >
        <div className=" text3-div ">
           <div style={{display:"flex",justifyContent:"center"}} > <h1 className="maintext" >Nike Air VAPORMAX</h1></div>
          <div  style={{display:"flex",justifyContent:"center"}} >  <p>Welcome to the next generation of air technology.</p></div>
          <div style={{display:"flex",justifyContent:"center"}} ><button style={{width:"120px",height:"35px",borderRadius:"70px",border:"0px",color:"white",backgroundColor:"black",fontWeight:"bold"}} >Shop Now</button></div>
         
        </div>
        </div>
      </div>


      {/* -----------------------------footer------------------- */}

     
    </div>
  );
};

export default Home;
