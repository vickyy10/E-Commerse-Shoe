import React, { useContext } from "react";

import "./home.css";


import { create } from "../App";
import myVideo from './items/vid.mp4'

const Home = () => {

  const { login } = useContext(create);
  return (
    <div style={{backgroundb:"black"}} >

    
     

      <div className=" body-div ">
        <div  className="main-main-img-div">

        <div className="  main-img-div ">
          <div className="text-div">
            <a href="#menwomen">
             
              <button className="shop-btn">Shop now &#11183;</button>
            </a>
          </div>
          <img
            className="image1"
            src="https://mensflair.com/wp-content/uploads/2022/11/chunky-sneakers-men.jpg"
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
          
            <h1 style={{position:"absolute",marginTop:"450px",marginLeft:"30px",color:"white"}}>MEN</h1>
            <p style={{position:"absolute",marginTop:"500px",marginLeft:"30px",color:"white"}} >style kjnggjnkjadndbvj</p>
            <button style={{position:"absolute",marginTop:"550px",marginLeft:"30px",}} >SHOP</button>
            <img
              className="shop-img2"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1503893837-1-655cc6b9c070d.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
              alt=""
            />
          
          </div>
          <div className="shop-img2-div">
            <img
              className="shop-img2"
              src="https://www.asphaltgold.com/cdn/shop/files/f9e544cdaa88c304103ec479ab084689482a8be6_ID6805_Adidas_x_Youth_of_Paris_Campus_80s_Crystal_White___Grey_One___Seafoam_Green_sm_2_768x768_crop_center.jpg?v=1706542520"
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
