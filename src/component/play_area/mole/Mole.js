import React, { useState } from 'react'
import classess from './Mole.module.css'
const Mole = () => {
    const [showMole,setshowMole]=useState(false);
    function rondomTime(min,max){
        return Math.round(Math.random()*(max-min)+min)
      }
      setTimeout(()=>{
        setshowMole(!showMole)
      },rondomTime(200,2000))
    
  return (<>
    {showMole && <div className={classess.mole}></div>}

      </>
    )
}

export default Mole