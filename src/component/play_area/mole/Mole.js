import React from 'react';
import classes from './Mole.module.css'
import { useDispatch } from 'react-redux';
import {ScoreSliceAction} from '../../../store/ScoreSlice'
import audioPath from '../../../asset/smallexplosion.mp3'
const Mole = ({onRemoveMole}) => {
  const dispatch=useDispatch();
  
const sound = new Audio(audioPath)
  const onScoreHnadler=()=>{
    sound.play();
    onRemoveMole();
    dispatch(ScoreSliceAction.scoreCounter({score:10}))
  }
  return ( 
  <>
  <div className={classes.mole} onClick={onScoreHnadler}></div>
</>
    )
}

export default Mole

