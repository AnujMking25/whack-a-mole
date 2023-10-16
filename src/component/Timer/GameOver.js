import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ScoreSliceAction } from '../../store/ScoreSlice';

const GameOver = () => {
    const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const timeReset=useSelector(state=>state.currScore.timeReset);
    const dispatch=useDispatch();
  useEffect(() => {
   
    let timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
         dispatch(ScoreSliceAction.playgame())
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    if(timeReset){
        clearInterval(timer);
        setMinutes(2);
        setSeconds(0)
        dispatch(ScoreSliceAction.resetTime())
    }
    
    return () => {
      clearInterval(timer);
      
    };
  }, [minutes, seconds,timeReset]);

  return (
    <div style={{borderBottom:"1px solid black"}}>
      <h1>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};

export default GameOver;
