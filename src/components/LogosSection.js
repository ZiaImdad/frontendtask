import React from "react";
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'

const LogosSection = () => {
  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        // background: "black",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "50%",
          width: "70%",
        //   background: "white",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src={logo1}/>
        <img src={logo2}/>
        <img src={logo3}/>
        <img src={logo4}/>
        <img src={logo5}/>
        <img src={logo6}/>
      </div>
    </div>
  );
};

export default LogosSection;
