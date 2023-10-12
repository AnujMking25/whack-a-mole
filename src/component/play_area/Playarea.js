import React from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
const Play_area = () => {
  return (
    <div className={classess.maindiv}>
      <div className={classess.playarea}>
      <div className={classess.hole}>
         <div className={classess.hole_top}></div>
         <div className={classess.hole_top}></div>
      </div>
      <div className={classess.hole}>
        <div className={classess.hole_bottom}></div>
        <div className={classess.hole_bottom}></div>
        <div className={classess.hole_bottom}></div>
        </div>
      </div>
      <Mallet/>
    </div>
  )
}

export default Play_area