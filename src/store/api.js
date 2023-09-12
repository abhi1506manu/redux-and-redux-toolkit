import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/CallBegan");
export const apiCallSuccess = createAction("api/CalllSucess");
export const apicallFail = createAction("api/CallFail");