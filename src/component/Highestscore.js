import React from 'react'
import classes from './Highestscore.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ScoreSliceAction } from '../store/ScoreSlice';
const Highestscore = () => {

  const Hscore=useSelector(state=>state.currScore.Hscore);
  const dispatch=useDispatch();
  return (
    <>
    <div className={classes.fixedbutton}>
    <button className={classes.exit} onClick={()=>dispatch(ScoreSliceAction.reset())}>↺</button>
    <button className={classes.exit} onClick={()=>dispatch(ScoreSliceAction.playgame())}>x</button>
    </div>
    
    <div className={classes.maindiv}>
      <h1>Highest Score=<span style={{color:"#B6B5D8"}}>{Hscore}</span></h1>
    </div>
    </>
  )
}

export default Highestscore