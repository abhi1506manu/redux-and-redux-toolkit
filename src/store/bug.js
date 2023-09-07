import { createAction } from "@reduxjs/toolkit";

const bugUpdated = createAction("bugUpdated");
console.log(bugUpdated({id:1}))

//Action creator
export const bugAdded = createAction("bugAdded");
  
export const bugResolved = createAction("bugResolve")
export const bugRemove = createAction("bugRemove")

  //reducers
  let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];

    case bugRemove.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
      );

    default:
      return state;
  }
}