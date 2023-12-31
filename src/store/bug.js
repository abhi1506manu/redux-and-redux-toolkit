import {createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";



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

    },

    bugAssignedToUser:(bug,action)=>{
      const {bugId, userId} = action.payload;
      const index = bug.findIndex(bug => bug.id == bugId);
      bug[index].userId = userId;

    }
  }
})

export const {bugAdded,bugResolved, bugAssignedToUser} = slice.actions;

export default slice.reducer;

//selectors
// export const getUnresolvedBugs = state => state.entities.bug.filter(bug => !bug.resolve);

//Memoization
//f(x)=>y {input:1,output:2}
//bugs =>get unresolved bug from the catch
 export const getUnresolvedBugs = createSelector(
  state => state.entities.bug,
  state => state.entities.project,
  (bug,project)=>bug.filter(bug => !bug.resolve)

)



export const getBugsByUser =userId=> createSelector(
  state => state.entities.bug,
  bug => bug.filter(bug => bug.userId ===userId )
)



