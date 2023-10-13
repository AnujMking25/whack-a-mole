import React, { useEffect, useState } from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
const Play_area = () => {
  const [showMole,setshowMole]=useState(null);
  const [same,setsame]=useState(0);
    function rondomTime(min,max){
        return Math.round(Math.random()*(max-min)+min)
      }

  if(same===showMole){
    setsame( Math.floor(Math.random()*5))
  }
     useEffect(()=>{
      const moleID=setTimeout(()=>{
        setshowMole(same)
      },rondomTime(2000,3000))
     },[same])
     
  return (
    <div className={classess.maindiv}>
      <div className={classess.playarea}>
      <div className={classess.hole}>
         <div className={classess.hole_top} >{(showMole===0) ? <Mole/>:null}</div>
         <div className={classess.hole_top}  >{(showMole===1) ? <Mole/>:null}</div>
      </div>
      <div className={classess.hole}>
        <div className={classess.hole_bottom}>{(showMole===2) ? <Mole/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===3) ? <Mole/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===4) ? <Mole/>:null}</div>
        </div>
      </div>
      <Mallet/>
    </div>
  )
}

export default Play_area