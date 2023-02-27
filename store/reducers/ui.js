import * as types from "../actions/types";
/******************* 
@purpose : Intital ui reducer data
@Author : INIC
******************/
const initialState = {
  isLoad: false,
  messages: [],
  modals: {
    login: false,
    register: false,
  },
};

/******************* 
@purpose : UI Reducer
@Parameter : {ui_ini_data, action}
@Author : INIC
******************/
export default function ui(ui_ini_data = initialState, action = {}) {
  switch (action.type) {
    // Set Various Custom Redux Key Data /
    case types.SET_UI_KEY:
      return Object.assign({}, ui_ini_data, {
        [action.key]: action.data,
      });
    // Show Alert Notification .
    case types.SHOW_ALERT:
      let tempMessages = Object.assign([], ui_ini_data.messages);
      tempMessages.push({
        text: action.text,
        level: action.level,
        timeout: action.timeout,
      });
      return Object.assign({}, ui_ini_data, {
        messages: tempMessages,
      });
    // Remove Alert Notification
    case types.REMOVE_ALERT:
      return Object.assign({}, ui_ini_data, {
        messages: [],
      });
    // Set Page Loader
    case types.TOGGLE_LOADER:
      let loaders = Object.assign({}, ui_ini_data.loaders);
      loaders[action.key] = action.value;
      return Object.assign({}, ui_ini_data, {
        loaders,
      });
    // Open/Close Modal
    case types.TOGGLE_MODAL:
      let modals = Object.assign({}, ui_ini_data.modals);
      modals[action.key] = action.value;
      return Object.assign({}, ui_ini_data, {
        modals,
      });
    default:
      return ui_ini_data;
  }
}
