import reducer from "./bug";
import { configureStore } from "@reduxjs/toolkit";

export default function configurAppeStore(){
    return configureStore({
        reducer:reducer
    })
    
}


