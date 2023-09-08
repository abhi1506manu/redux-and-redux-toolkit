import { createAction, createReducer } from "@reduxjs/toolkit";

const bugUpdated = createAction("bugUpdated");
console.log(bugUpdated({ id: 1 }));

//Action creator
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolve");
export const bugRemove = createAction("bugRemove");

//reducers
let lastId = 0;

export default createReducer([], {
  //key:value
  //action:function(event=>eventHandler)
  //where keys are action and value are updated value
  [bugAdded.type]: (bug, action) => {
    bug.push({
      id: ++lastId,
      description: action.payload.description,
      resolve: false,
    });
  },

  [bugResolved.type]:(bug,action)=>{
    const index = bug.findIndex(bug=>bug.id ===action.payload.id );
    bug[index].resolve = true;

  }
});


