import * as types from "./types";
/******************* 
@purpose : Set UI Key on Redux
@Parameter : {key, data}
@Author : INIC
******************/
export const setUiKey = (key, data) => ({
  type: types.SET_UI_KEY,
  key,
  data,
});
/******************* 
@purpose : Set Alert Notification
@Parameter : {text, level, timeout}
@Author : INIC
******************/
export const setAlert = (text, level = "success", timeout = 5000) => ({
  type: types.SHOW_ALERT,
  text,
  level,
  timeout,
});
/******************* 
@purpose : Remove Alert Notification
@Parameter : {}
@Author : INIC
******************/
export const removeAlert = () => ({
  type: types.REMOVE_ALERT,
});
/******************* 
@purpose :  Handle Modal View
@Parameter : {value, key}
@Author : INIC
******************/
export const toggleModal = (value, key) => ({
  type: types.TOGGLE_MODAL,
  value,
  key,
});
/******************* 
@purpose :  Handle Loader View
@Parameter : {value, key}
@Author : INIC
******************/
export const toggleLoader = (value, key) => ({
  type: types.TOGGLE_LOADER,
  value,
  key,
});
