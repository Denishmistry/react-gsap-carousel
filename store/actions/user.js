import { get } from "../../api"; // API Types
import * as types from "./types.js"; // Redux actions payload types
import Routes from "./../../api/routes"; // API endpoint routes
const { USER_DETAILS } = Routes;
/******************** 
@purpose : Used for get user information
@Parameter : { data, dispatch }
@Author : INIC
******************/
export const getUserInfo = () => (dispatch) => {
  return get(USER_DETAILS).then((res) => {
    if (res.data) {
      dispatch(setUserInfo(res.data));
    }
    return Promise.reject(res);
  });
};
/******************** 
@purpose : Used for store logout responce and remove token in cookie
@Parameter : { }
@Author : INIC
******************/
export const setUserInfo = (data) => ({
  type: types.SET_USER_INFO,
  data,
});
