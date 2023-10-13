import React from 'react';
import classes from './Mole.module.css'
const Mole = () => {
  const onClickHnadler=()=>{
    console.log('yeeee')
  }
  return ( 
  <>
  <div className={classes.mole} onClick={onClickHnadler}>
  </div>
</>
    )
}

export default Mole