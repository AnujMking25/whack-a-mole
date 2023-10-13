import {createSlice} from '@reduxjs/toolkit'
const inititalState={
    score:0,
    Hscore:null
}
const ScoreSlice=createSlice({
    name:'ScoreManagement',
    initialState:inititalState,
    reducers:{
        scoreCounter(state,action){
            state.score=state.score+ action.payload.score;
            console.log(state.score);
        }
    }
})
export const ScoreSliceAction=ScoreSlice.actions;
export default ScoreSlice.reducer;