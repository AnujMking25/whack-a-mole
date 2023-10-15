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
   <h2>Instructions :—-</h2>
   <p>Move the mallet and press double click to hit the mole peeping out from the hole.</p>
    <p>Earn 10 points by hitting mole everytime.</p>
    <p>Points which you earned shown on the bottom of display area.</p>
    <p>Level increase by Hitting more and more mole .</p>
    <p>Highest score reflect on top of the display area.</p>
    <p>Click on refresh ↺ button to reset and start again.</p>
    <p>Click on cross ❎ button to exit.</p>
    </div>
  )
}

export default Playgame