import React from 'react';
import classes from './Mole.module.css'
import { useDispatch } from 'react-redux';
import {ScoreSliceAction} from '../../../store/ScoreSlice'
import audioPath from '../../../asset/smallexplosion.mp3'
const Mole = ({onClearTimeId}) => {
  const dispatch=useDispatch();
  
const sound = new Audio(audioPath)
  const onScoreHnadler=()=>{
    console.log("l am mole");
    sound.play();
    onClearTimeId();
    dispatch(ScoreSliceAction.scoreCounter({score:10}))
  }
  return ( 
  <>
  <div className={classes.mole} onClick={onScoreHnadler}>
  </div>
</>
    )
}

export default Mole