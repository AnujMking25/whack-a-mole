import React from 'react'
import classes from './Screenpage.module.css'
const Screenpage = () => {
  return (
    <div className={classes.maindiv}>
    <div className={classes.box}><h1>Level</h1> <br />0</div>
    <div className={classes.box}><h1>Score</h1> <h3>0</h3></div>
    </div>
  )
}

export default Screenpage