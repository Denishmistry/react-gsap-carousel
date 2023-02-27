import { API_URL } from "../config"; // project configuration file
import fetch from "isomorphic-unfetch";
import store from "../store"; // Access redux store data
import { setAlert } from "../store/actions";
/******************* 
@purpose : Convert Responce to JSON
@Parameter : {response, status}
@Author : INIC
******************/
const makeJson = async (response, status) => {
  const json = await response.json();
  return Promise.resolve({ ...json, statusCode: status });
};
/******************* 
@purpose : API Responce Handler
@Parameter : {alert, res}
@Author : INIC
******************/
const responseHandler = (alert) => (response) => {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const promise = makeJson(response, response.status);
    const ok = response.ok;
    if (alert) {
      promise.then((res) => {
        if (res.validate) {
          for (let k in res.validate) {
            if (k !== "_service") {
              for (let j in res.validate[k]) {
                store.dispatch(setAlert(res.validate[k][j], "error", 5000));
              }
            }
          }
        }
        if (res.message && !res.validate) {
          store.dispatch(setAlert(res.message, ok ? "success" : "error"));
        }
      });
    }
    return promise;
  }
};
/******************* 
@purpose : API Request Header Types
@Parameter : {}
@Author : INIC
******************/
const getHeader = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  // 'Authorization': `Bearer ${store.getState().user.token}`,
});
/******************* 
@purpose : Fetch Get API
@Parameter : {data}
@Author : INIC
******************/
export const get = (...data) => {
  const [url, alert = false] = data;
  return fetch(`${API_URL}/${url}`, {
    method: "get",
    headers: getHeader(),
  })
    .then(responseHandler(alert))
    .catch(responseHandler(alert));
};
/******************* 
@purpose : Fetch Post API
@Parameter : {data}
@Author : INIC
******************/
export const post = (...data) => {
  const [url, alert = true, body] = data;
  return fetch(`${API_URL}/${url}`, {
    method: "post",
    headers: getHeader(),
    body: JSON.stringify(body),
  })
    .then(responseHandler(alert))
    .catch(responseHandler(alert));
};
/******************* 
@purpose : Fetch Put API
@Parameter : {data}
@Author : INIC
******************/
export const put = (...data) => {
  const [url, alert = false, body] = data;
  return fetch(`${API_URL}/${url}`, {
    method: "put",
    headers: getHeader(),
    body: JSON.stringify(body),
  })
    .then(responseHandler(alert))
    .catch(responseHandler(alert));
};
/******************* 
@purpose : Fetch Delete API
@Parameter : {data}
@Author : INIC
******************/
export const remove = (...data) => {
  const [url, alert = false] = data;
  return fetch(`${API_URL}/${url}`, {
    method: "delete",
    headers: getHeader(),
  })
    .then(responseHandler(alert))
    .catch(responseHandler(alert));
};
/******************* 
@purpose : Fetch Patch API
@Parameter : {data}
@Author : INIC
******************/
export const patch = (...data) => {
  const [url, alert = false, body] = data;
  return fetch(`${API_URL}/${url}`, {
    method: "patch",
    headers: getHeader(),
    body: JSON.stringify(body),
  })
    .then(responseHandler(alert))
    .catch(responseHandler(alert));
};
/******************* 
@purpose : Fetch Post API
@Parameter : {data}
@Author : INIC
******************/
export const image = (...data) => {
  const [url, alert = false, body] = data;
  return fetch(`${API_URL}/${url}`, {
    method: "post",
    headers: {},
    body: body,
  })
    .then(responseHandler(alert))
    .catch(responseHandler(alert));
};
