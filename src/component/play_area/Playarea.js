import React, { useEffect, useState } from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
const Play_area = () => {
  const [showMole,setshowMole]=useState(null);
  const [min,setMin]=useState(1500);
  const [max,setMax]=useState(2000);
  const [samePos,setsamePos]=useState(0);
  const [clearTime,setClearTime]=useState();
    function randomTime(min,max){
        return Math.round(Math.random()*(max-min)+min)
      }

  if(samePos===showMole){
    setsamePos( Math.floor(Math.random()*5))

  } 
  function onsetTimer(min,max){
const clearTimeId=setTimeout(()=>{
  setshowMole(samePos)
},randomTime(min,max));
return clearTimeId
}
  function clearTimer(minT,maxT){
    clearTimeout(clearTime);
    setMin(min-minT);
    setMax(max-maxT)
    setClearTime(onsetTimer(min-minT,max-maxT))
  }
     useEffect(()=>{
       
      setClearTime(onsetTimer(min,max));
     },[samePos])
     
  return (
    <div className={classess.maindiv}>
     <Mallet/>
      <div className={classess.playarea}>
      <div className={classess.hole}>
         <div className={classess.hole_top}>{(showMole===0) ? <Mole onClearTimeId={clearTimer}/>:null}</div>
         <div className={classess.hole_top}>{(showMole===1) ? <Mole onClearTimeId={clearTimer}/>:null}</div>
      </div>
      <div className={classess.hole}>
        <div className={classess.hole_bottom}>{(showMole===2) ? <Mole onClearTimeId={clearTimer}/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===3) ? <Mole onClearTimeId={clearTimer}/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===4) ? <Mole onClearTimeId={clearTimer}/>:null}</div>
        </div>
      </div>
     
    </div>
  )
}

export default Play_area