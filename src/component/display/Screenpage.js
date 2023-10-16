import React from 'react'
import classes from './Screenpage.module.css'
import { useSelector } from 'react-redux'
import GameOver from '../Timer/GameOver'
const Screenpage = () => {
 const currScore=useSelector(state=>state.currScore.score)
 const level=useSelector(state=>state.currScore.level);
  return (
    <div className={classes.maindiv}>
    <div className={classes.box}><GameOver/><h1>Level</h1> <h3>{level}</h3></div>
    <div className={classes.box}><h1>Score</h1> <h3>{currScore}</h3></div>
    </div>
  )
}

export default Screenpage