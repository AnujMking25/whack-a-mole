import React from 'react'
import classes from './Highestscore.module.css'
import { useSelector } from 'react-redux'
const Highestscore = () => {

  const Hscore=useSelector(state=>state.currScore.Hscore);
  return (
    <div className={classes.maindiv}>
    <h1>Highest Score=&gt;<span style={{color:"#B6B5D8"}}>{Hscore}</span></h1>
    </div>
  )
}

export default Highestscore