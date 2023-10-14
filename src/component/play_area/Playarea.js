import React, { useEffect, useState } from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
import { useSelector } from 'react-redux'
const Play_area = () => {
  const [showMole,setshowMole]=useState(null);
  const level=useSelector(state=>state.currScore.level);
  const [samePos,setsamePos]=useState(0);
    function randomTime(min,max){
        return Math.round(Math.random()*(max-min)+min)
      }

  if(samePos===showMole){
    setsamePos( Math.floor(Math.random()*5))

  }
     useEffect(()=>{
      setTimeout(()=>{
        setshowMole(samePos)
      },randomTime(200,3000-level*200))
     },[samePos,level])
     
  return (
    <div className={classess.maindiv}>
     <Mallet/>
      <div className={classess.playarea}>
      <div className={classess.hole}>
         <div className={classess.hole_top}>{(showMole===0) ? <Mole/>:null}</div>
         <div className={classess.hole_top}>{(showMole===1) ? <Mole/>:null}</div>
      </div>
      <div className={classess.hole}>
        <div className={classess.hole_bottom}>{(showMole===2) ? <Mole/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===3) ? <Mole/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===4) ? <Mole/>:null}</div>
        </div>
      </div>
     
    </div>
  )
}

export default Play_area