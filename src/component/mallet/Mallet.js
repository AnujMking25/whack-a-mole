import React, { useState, useEffect } from "react";
import classess from "./Mallet.module.css";
import mallet from '../../asset/mallet5.png';
const Mallet = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(null);

  const trackCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY - 80 });
  };

  const rotateImage = () => {
 
  console.log("Mallet"); 
  
    setRotation(rotation - 45);
    setTimeout(() => setRotation(0), 100);
  };

  useEffect(() => {
    window.addEventListener("mousemove", trackCursorPosition);
    window.addEventListener("click",()=>{
      console.log("Mallet clicked!!");
      rotateImage()
    })
     return () => {
      window.removeEventListener("mousemove", trackCursorPosition);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y + "px",
    left: position.x + "px",
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div className={classess.mallet}>
      <img style={cursorStyle}  src={mallet} alt="mallet.png" />
    </div>
  );
};

export default Mallet;
