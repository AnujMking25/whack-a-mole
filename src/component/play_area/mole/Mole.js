import React from 'react';
import classes from './Mole.module.css'
import audioPath from '../../../asset/smallexplosion.mp3'
const Mole = ({onRemoveMole}) => {  
const sound = new Audio(audioPath)
  const onScoreHnadler=()=>{
    sound.play();
    onRemoveMole();
   
  }
  return ( 
  <>
  <div className={classes.mole} onClick={onScoreHnadler}></div>
</>
    )
}

export default Mole

