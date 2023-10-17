import React, { useEffect, useState } from 'react'
import classess from './Play_area.module.css' 
import Mallet from '../mallet/Mallet'
import Mole from './mole/Mole'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {ScoreSliceAction} from '../../store/ScoreSlice'
const Play_area = () => {
const [timer,setTimer]=useState(3000);
const [showMole,setshowMole]=useState(null);
const [removeMole,setRemoveMole]=useState(null);
const dispatch=useDispatch();

const score=useSelector(state=>state.currScore.score);

function onRemoveMole(){
  setshowMole(Math.floor(Math.random()*5));
  dispatch(ScoreSliceAction.scoreCounter({score:10}))
  if(timer>100){
    setTimer(timer-30)
  }
  
}
useEffect(()=>{
  console.log("useEffect");
  if(score===0){
setTimer(3000)
  }
if(removeMole){
  console.log("Is clear");
  clearInterval(removeMole)
}
console.log(timer);
  const id=setInterval(()=>{
  setshowMole(Math.floor(Math.random()*5));
  },timer)

  setRemoveMole(id)
},[timer,score])
  return (
    <div className={classess.maindiv}>
     <Mallet/>
      <div className={classess.playarea}>
      <div className={classess.hole}>
         <div className={classess.hole_top}>{(showMole===0) ? <Mole onRemoveMole={onRemoveMole}/>:null}</div>
         <div className={classess.hole_top}>{(showMole===1) ? <Mole onRemoveMole={onRemoveMole}/>:null}</div>
      </div>
      <div className={classess.hole}>
        <div className={classess.hole_bottom}>{(showMole===2) ? <Mole onRemoveMole={onRemoveMole}/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===3) ? <Mole onRemoveMole={onRemoveMole}/>:null}</div>
        <div className={classess.hole_bottom}>{(showMole===4) ? <Mole onRemoveMole={onRemoveMole}/>:null}</div>
        </div>
      </div>
     
    </div>
  )
}

export default Play_area