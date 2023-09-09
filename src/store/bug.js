import {createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const slice = createSlice({
  name:'bugs',
  initialState:[],
  reducers:{
    //action => action handlers
    bugAdded:(bug,action)=>{
      bug.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      });
    },

    bugResolved:(bug,action)=>{
      const index = bug.findIndex(bug=>bug.id ===action.payload.id );
      bug[index].resolve = true;

    }
  }
})

export const {bugAdded,bugResolved} = slice.actions;

export default slice.reducer;



