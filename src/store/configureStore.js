import reducer from "./reducer";
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import getError from "./middleware/getError";
import api from "./middleware/api";


export default function configurAppeStore() {
  return configureStore({
    reducer: reducer,
    middleware:[
      ...getDefaultMiddleware({
        serializableCheck:false,
      }),
      logger({destination:"console"}),
      getError,
      api
    ]
  });
}
