import * as types from "../actions/types.js";
import { get_cookie } from "../../utils"; //Utility functions
/******************* 
@purpose : Intital user reducer data
@Author : INIC
******************/
const initialState = {
  token: get_cookie("token"),
  userInfo: "",
};
/******************* 
@purpose : ui reducer
@Parameter : {user_ini_data, action}
@Author : INIC
******************/
const user = (user_ini_data = initialState, action = {}) => {
  switch (action.type) {
    // Set user authorized token
    case types.SET_TOKEN:
      return Object.assign({}, user_ini_data, {
        token: action.token,
      });
    // Remove user authorized token
    case types.REMOVE_TOKEN:
      return Object.assign({}, user_ini_data, {
        token: false,
      });
    // Set login user information
    case types.SET_USER_INFO:
      return Object.assign({}, user_ini_data, {
        data: { ...user_ini_data.data, ...action.data },
      });
    default:
      return user_ini_data;
  }
};

export default user;
