import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export default function configurAppeStore() {
  return configureStore({
    reducer: reducer,
  });
}
