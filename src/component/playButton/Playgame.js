import React from 'react'
import classes from './Playgame.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ScoreSliceAction } from '../../store/ScoreSlice';
import Whackimage from '../../asset/whack-a-mole.png'

const Playgame = () => {
  const score=useSelector(state=>state.currScore.score);  
  const playGame=useSelector(state=>state.currScore.playgame)
  const dispatch=useDispatch();
    const onplayAndPlayAgain=()=>{
if(score>0){
  dispatch(ScoreSliceAction.playAgain())
}else{
  dispatch(ScoreSliceAction.playgame())
}
    }
  return (
    <div className={classes.playgame}>
    <h1>Whack-A-Mole</h1>
    {(score===0) ?<img src={Whackimage} alt="whack-a-mole.png" />:<h2 style={{color:"red"}}>Game Over</h2>}
    {score>0 ? <h2>Your Score:{score}</h2>:null}
    <button onClick={onplayAndPlayAgain}>{(score ===0) ? `Let's Play`:`Play again`}</button>
   
   {!playGame && <div><h2>Instructions :</h2>
   <div className={classes.instruction}>
   <ul>
   <li>Move the mallet on Mole and press single click to hit the mole peeping out from the hole.</li>
    <li>Earn 10 points by hitting mole everytime.</li>
    <li>Points which you earned shown on the bottom of display area.</li>
    <li>Speed increase by Hitting more and more mole.</li>
    <li>Level increase by Hitting more and more mole.</li>
    <li>Game over after span of Two minute.</li>
    <li>Highest score reflect on top of the display area.</li>
    <li>Click on refresh ↺ button to reset and start again.</li>
    <li>Click on cross ❎ button to exit.</li>
    </ul>
    </div>
    </div>
    }
    </div>
  )
}

export default Playgame