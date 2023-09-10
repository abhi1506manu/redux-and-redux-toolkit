import { createSlice } from "@reduxjs/toolkit";

let noUser=0;
const Slice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(user,action)=>{
            user.push({
                id:++noUser,
                name:action.payload.name
            })

        }
    }
})

export const {addUser} = Slice.actions;

export default Slice.reducer;