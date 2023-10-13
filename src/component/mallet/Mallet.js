import React, { useState, useEffect } from 'react';
import classess from './Mallet.module.css'
const Mallet = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
  
    const trackCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY-80 });
    };
  
    const rotateImage = () => {
      setRotation(rotation - 45);
      setTimeout(()=>setRotation(0),100)
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', trackCursorPosition);
    },[]);
  
    const cursorStyle = {
      position: 'fixed',
      top: position.y + 'px',
      left: position.x + 'px',
      transform: `rotate(${rotation}deg)`, 
     
    };
  
    return <div className={classess.mallet} style={cursorStyle} onClick={rotateImage}></div>;
  
}

export default Mallet