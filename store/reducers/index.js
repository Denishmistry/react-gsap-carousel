import { combineReducers } from "redux";
//Import all reducer
import ui from "./ui";
import user from "./user";
/******************* 
@purpose : Combine Reducer
@Parameter : {ui, user}
@Author : INIC
******************/
const rootReducer = combineReducers({
  ui,
  user,
});

export default rootReducer;
