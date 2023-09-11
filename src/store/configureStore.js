import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import func from "./middleware/func";

export default function configurAppeStore() {
  return configureStore({
    reducer: reducer,
    middleware:[
      logger({destination:"console"}),
     func
    ]
  });
}
