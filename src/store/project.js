import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice2 = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectCreated: (project, action) => {
      project.push({
        id: ++lastId,
        description: action.payload.description,
      });
    },
  },
});

console.log(slice2)

export const {projectCreated} = slice2.actions;

export default slice2.reducer;
