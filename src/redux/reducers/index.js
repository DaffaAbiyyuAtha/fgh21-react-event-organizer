import auth from "./auth";
import event from "./event";
import profile from "./profile";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  auth,
  profile,
  event,
});

export default reducer;
