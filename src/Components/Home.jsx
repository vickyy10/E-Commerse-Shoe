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
              {" "}
              <button className="shop-btn">Shop now &#11183;</button>
            </a>
          </div>
          <img
            className="image1"
            src="https://images.squarespace-cdn.com/content/v1/5540d48de4b040fb86c78e2f/1531292358236-8TMMQ0DUGY67XX0TX3RU/ks--15.jpg?format=2500w"
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
              src="https://i.etsystatic.com/46383076/r/il/97de47/5323740485/il_fullxfull.5323740485_g9ok.jpg"
              alt=""
            />
          </div>
          <div className="shop-img2-div">
            <img
              className="shop-img2"
              src="https://www.byrdie.com/thmb/5cP_fMcIC5A5GTlc0b7Clw2SGCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/salterhouse-4c15074f2d3546bb9b9d2e8aadca28cd.jpg"
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
