import {createSlice} from '@reduxjs/toolkit'
const totalScore=localStorage.getItem('Hscore')
const inititalState={
    playgame:false,
    score:0,
    level:1,
    timeReset:false,
    Hscore:totalScore? totalScore:0
}
const ScoreSlice=createSlice({
    name:'ScoreManagement',
    initialState:inititalState,
    reducers:{
        playgame(state){
            state.playgame=!state.playgame;
        },
        playAgain(state){
            state.playgame=!state.playgame;
            state.score=0;
            state.level=1;
        },
        scoreCounter(state,action){
            state.score=state.score+ action.payload.score;
            if(state.score%100===0){
                state.level+=1
            }
            if(state.score>state.Hscore){
                state.Hscore=state.score;
                localStorage.setItem('Hscore',state.score);

            }
        },
        reset(state){
            state.score=0;
            state.level=1;
            state.timeReset=true;
        },
        resetTime(state){
            state.timeReset=false;
        }
    }
})
export const ScoreSliceAction=ScoreSlice.actions;
export default ScoreSlice.reducer;