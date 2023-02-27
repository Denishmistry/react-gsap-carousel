import { post } from "../../api"; // API Types
import * as types from "./types.js"; // Redux actions payload types
import { set_cookie, remove_cookie } from "./../../utils"; // Utility functions
import Routes from "./../../api/routes"; // API endpoint routes
const { LOGIN, LOG_OUT } = Routes;
/******************** 
@purpose : Used for login user
@Parameter : { data, dispatch }
@Author : INIC
******************/
export const login = (data) => (dispatch) => {
  return post(LOGIN, true, data).then((res) => {
    if (res.data) {
      dispatch(setToken(res.data.tokens.access_token));
      return res.data;
    }
    return Promise.reject(res);
  });
};
/******************** 
@purpose : Used for logout user
@Parameter : { dispatch }
@Author : INIC
******************/
export const logout = () => (dispatch) => {
  return post(LOG_OUT, true, data).then((res) => {
    if (res.data) {
      dispatch(removeToken());
      return res.data;
    }
    return Promise.reject(res);
  });
};

/******************** 
@purpose : Used for store login responce and set token in cookie
@Parameter : { token }
@Author : INIC
******************/
export const setToken = (token) => {
  set_cookie("token", token);
  return {
    type: types.SET_TOKEN,
    token,
  };
};
/******************** 
@purpose : Used for store logout responce and remove token in cookie
@Parameter : { }
@Author : INIC
******************/
export const removeToken = () => {
  remove_cookie("token");
  return {
    type: types.REMOVE_TOKEN,
  };
};
