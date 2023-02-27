import { Router } from "../routes"; //Access routing
import Cookies from "js-cookie";
import store from "../store"; // Access redux store data
import { setUiKey, setAlert } from "../store/actions"; //Notification Alert

/******************* 
@purpose : Change File Extension
@Parameter : {fileName, newExt}
@Author : INIC
******************/
export function change_extension(fileName, newExt = "webp") {
  var extension = fileName && fileName.match(/\.([^\./\?]+)($|\?)/)[1];
  if (extension === "svg") {
    return fileName;
  }
  var _tmp;
  return (
    fileName &&
    fileName.substr(
      0,
      ~(_tmp = fileName.lastIndexOf(".")) ? _tmp : fileName.length
    ) +
      "." +
      newExt
  );
}
/******************* 
@purpose : Generate Youtube Thmbnail
@Parameter : {url, quality}
@Author : INIC
******************/
export function get_youtube_thumbnail(url, quality) {
  if (url) {
    var video_id, result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) || url.match(/youtu.be\/(.{11})/);
    if (result) {
      video_id = result.pop();
    } 
    if (video_id) {
      if (typeof quality == "undefined") {
        quality = "high";
      }
      var quality_key = "maxresdefault"; // Max quality
      if (quality == "low") {
        quality_key = "sddefault";
      } else if (quality == "medium") {
        quality_key = "mqdefault";
      } else if (quality == "high") {
        quality_key = "hqdefault";
      }
      return "https://img.youtube.com/vi/" + video_id + "/" + quality_key + ".jpg";
    }
  }
  return "";
}
/******************* 
@purpose : Check Number Odd/Even 
@Parameter : {number}
@Author : INIC
******************/
export function is_odd_nuber(number) {
    return Number(number) % 2 == 0
}
/******************* 
@purpose : Change/Replace Link
@Parameter : {url}
@Author : INIC
******************/
export function replace_link(url) {
  if (url) {
    var baseUrlPattern = /^https?:\/\/[a-z\:0-9.]+/;
    var result = "";
    var match = baseUrlPattern.exec(url);
    if (match != null) {
      result = match[0];
    }
    if (result.length > 0) {
      url = url.replace(result, "");
    }
    return url;
  }
  return "/error";
}
/******************* 
@purpose :  Next.Js Route Replace Change
@Parameter : {link, is_scroll_top}
@Author : INIC
******************/
export function on_route_replace_change(link, is_scroll_top = true) {
  link = replace_link(link);
  if (link && link !== "#") {
    Router.pushRoute(link).then(() => is_scroll_top && window.scrollTo(0, 0));
  }
}
/******************* 
@purpose :  Next.Js Route Change
@Parameter : {path, slug, is_scroll_top}
@Author : INIC
******************/
export function on_route_change(path, slug, is_scroll_top = true) {
  if (slug) {
    Router.pushRoute(path, { slug: slug }).then(
      () => is_scroll_top && window.scrollTo(0, 0)
    );
  } else {
    Router.pushRoute(path).then(() => is_scroll_top && window.scrollTo(0, 0));
  }
}
/******************* 
@purpose :  Filter Data From Array
@Parameter : {filter, data}
@Author : INIC
******************/
export function real_text_filter(filter, data) {
  if (!filter) {
    return data;
  }
  const lowercasedFilter = filter.toLowerCase();
  return data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
  });
}
/******************* 
@purpose :  Parse Stringify Query
@Parameter : {queryString}
@Author : INIC
******************/
export function parse_query(queryString) {
  var query = {};
  var pairs = (queryString[0] === "?"
    ? queryString.substr(1)
    : queryString
  ).split("&");
 for (let pair of pairs) {
    let new_pair = pair.split("=");
    if (new_pair[0] === "") continue;
    query[decodeURIComponent(new_pair[0])] = decodeURIComponent(new_pair[1] || "");
  }
  return query;
}

/******************* 
@purpose :  Get URL Data Type
@Parameter : {path, type}
@Author : INIC
******************/
export function get_host_url_data(path, type) {
  if (path) {
    let my_url = new URL(path);
    if (type) {
      return my_url[type];
    }
    return my_url;
  }
  return "";
}
/******************* 
@purpose : Get Cookie
@Parameter : {name}
@Author : INIC
******************/
export function get_cookie(name) {
  if (name) {
    return Cookies.get(name);
  }
  return "";
}
/******************* 
@purpose : Set Cookie
@Parameter : {name, value}
@Author : INIC
******************/
export function set_cookie(name, value) {
  if (name) {
    // expires after= 50000 days
    Cookies.set(name, value, { expires: 50000 });
  }
}
/******************* 
@purpose : Remove Cookie
@Parameter : {name}
@Author : INIC
******************/
export function remove_cookie(name) {
  if (name) {
    Cookies.remove(name);
  }
}


/******************* 
@purpose : Remove Array Element
@Parameter : {arr, item}
@Author : INIC
******************/
export function array_remove_index_by_value(arr, item) {
  for (var i = arr.length; i--; ) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
/******************* 
@purpose : Save Post On Cookie
@Parameter : {post_id}
@Author : INIC
******************/
export function save_post_on_cookie(post_id) {
  let saved_post_id = get_cookie("saved_post_id");
  if (post_id) {
    if (saved_post_id) {
      saved_post_id = JSON.parse(saved_post_id);
      let is_exist = saved_post_id.includes(post_id);
      if (is_exist) {
        saved_post_id = array_remove_index_by_value(saved_post_id, post_id);
        saved_post_id = JSON.stringify(saved_post_id);
        store.dispatch(setAlert("Bookmark removed successfully", "info", 5000));
      } else {
        saved_post_id.push(post_id);
        saved_post_id = JSON.stringify(saved_post_id);
        store.dispatch(
          setAlert("Bookmark saved successfully", "success", 5000)
        );
      }
    } else {
      saved_post_id = [];
      saved_post_id.push(post_id);
      saved_post_id = JSON.stringify(saved_post_id);

      store.dispatch(setAlert("Bookmark saved successfully", "success", 5000));
    }
  }
  store.dispatch(setUiKey("saved_post_id", saved_post_id));
  set_cookie("saved_post_id", saved_post_id);
}
/******************* 
@purpose : Ganarate File Base64 Image
@Parameter : {file}
@Author : INIC
******************/
export function get_base_64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
