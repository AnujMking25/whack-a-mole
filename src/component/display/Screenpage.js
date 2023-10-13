import React from 'react'
import classes from './Screenpage.module.css'
import { useSelector } from 'react-redux'
const Screenpage = () => {
 const currScore=useSelector(state=>state.currScore.score)
  return (
    <div className={classes.maindiv}>
    <div className={classes.box}><h1>Level</h1> <h3>0</h3></div>
    <div className={classes.box}><h1>Score</h1> <h3>{currScore}</h3></div>
    </div>
  )
}

export default Screenpage