import React, { useState } from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
const Play_area = () => {
  const [showMole,setshowMole]=useState(false);
    function rondomTime(min,max){
        return Math.round(Math.random()*(max-min)+min)
      }
      setTimeout(()=>{
        setshowMole(!showMole)
      },rondomTime(200,2000))
    
  return (
    <div className={classess.maindiv}>
      <div className={classess.playarea}>
      <div className={classess.hole}>
         <div className={classess.hole_top}><Mole/></div>
         <div className={classess.hole_top}><Mole/></div>
      </div>
      <div className={classess.hole}>
        <div className={classess.hole_bottom}><Mole/></div>
        <div className={classess.hole_bottom}><Mole/></div>
        <div className={classess.hole_bottom}><Mole/></div>
        </div>
      </div>
      <Mallet/>
    </div>
  )
}

export default Play_area