import React from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
const Play_area = () => {
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