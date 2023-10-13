import { configureStore } from "@reduxjs/toolkit";
import ScoreSlice from "./ScoreSlice";
const Store=configureStore({
    reducer:{
        currScore:ScoreSlice
    }
})
export default Store;