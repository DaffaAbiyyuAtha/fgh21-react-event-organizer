import auth from "./auth";
import event from "./event";
import profile from "./profile";
import { combineReducers } from "@reduxjs/toolkit";
import sectionSelector from "./sectionSelector";

const reducer = combineReducers({
  auth,
  profile,
  event,
  sectionSelector,
});

export default reducer;
