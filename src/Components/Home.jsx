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
              <div className="ttdiv" style={{width:'700px',height:'400px',background:'',marginLeft:'-500px',marginBottom:' 60px'}}>
                <h1 className="tt1" style={{fontSize:'100px',color:'white'}}>STRIDE</h1>
                <h1 className="tt2" style={{fontSize:'100px',color:'white'}}>IN STYLE</h1>
                <h1 className="tt3" style={{fontSize:'100px',color:'white'}}>COMFORTABLY  </h1>
              </div>
             
              <button className="shop-btn-1">Shop now &#11183;</button>
            </a>
          </div>
          <img
            className="image1"
            src="https://www.localesbambaci.com.ar/cdn/shop/collections/932f56fe-0014-43a5-aa27-505cebe9b99d.__CR0_0_1464_600_PT0_SX1464_V1_1200x1200.jpg?v=1584315807"
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
            <button className="shop-btn" >SHOP</button>
            <img
              className="shop-img2"
              src="https://www.bijsmaak.com/media/blog/cache/1200x/New-Balance-2002R-_Protection-Pack_-sandstone-turtledove-gold-metallic-4X5-9.jpg"
              alt=""
            />
          
          </div>
          <div className="shop-img2-div">
            <img
              className="shop-img2"
              src="https://www.brit.co/media-library/adidas-sambas-are-of-the-most-popular-it-girl-sneakers.jpg?id=34919917&width=980"
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
