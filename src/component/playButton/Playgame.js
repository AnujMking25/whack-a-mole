import React from 'react'
import classes from './Playgame.module.css'
import { useDispatch } from 'react-redux'
import { ScoreSliceAction } from '../../store/ScoreSlice';
import Whackimage from '../../asset/whack-a-mole.png'
const Playgame = () => {
    const dispatch=useDispatch();
  return (
    <div className={classes.playgame}>
    <h1>Whack-A-Mole</h1>
    <img src={Whackimage} alt="whack-a-mole.png" />
    <button onClick={()=>dispatch(ScoreSliceAction.playgame())}>Let's Play</button>
   
    </div>
  )
}

export default Playgame