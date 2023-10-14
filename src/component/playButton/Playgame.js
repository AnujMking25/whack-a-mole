import React from 'react'
import classes from './Playgame.module.css'
import { useDispatch } from 'react-redux'
import { ScoreSliceAction } from '../../store/ScoreSlice';
const Playgame = () => {
    
    const dispatch=useDispatch();
  return (
    <div className={classes.playgame}>
    <h1>Whack-A-Mole</h1>
    <button onClick={()=>dispatch(ScoreSliceAction.playgame())}>Let's Play</button>
   
    </div>
  )
}

export default Playgame