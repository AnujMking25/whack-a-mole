import React from 'react';
import classes from './Mole.module.css'
import { useDispatch } from 'react-redux';
import {ScoreSliceAction} from '../../../store/ScoreSlice'
const Mole = () => {
  const dispatch=useDispatch();
  const onScoreHnadler=()=>{
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