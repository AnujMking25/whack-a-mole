import React, { useEffect, useState } from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
import { useSelector } from 'react-redux'
const Play_area = () => {
  const [showMole,setshowMole]=useState(null);
  const level=useSelector(state=>state.currScore.level);
  const [samePos,setsamePos]=useState(0);
  const [clearTime,setClearTime]=useState();
    function randomTime(min,max){
        return Math.round(Math.random()*(max-min)+min)
      }

  if(samePos===showMole){
    setsamePos( Math.floor(Math.random()*5))

  } 
  function onsetTimer(){
const clearTimeId=setTimeout(()=>{
  setshowMole(samePos)
},randomTime(100,2200-level*200));
return clearTimeId
}
  function clearTimer(){
    clearTimeout(clearTime);
    setClearTime(onsetTimer())
  }
     useEffect(()=>{
       
      setClearTime(onsetTimer());
     },[samePos,level])
     
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