const routes = (module.exports = require("next-routes")());
/******************* 
@purpose : Application Routing URL
@Author : INIC
******************/
routes.add("home", "/", "/");
routes.add("about", "/about", "/about");
// accounts and authentications page routes
routes.add("account/sign-in", "account/sign-in", "account/sign-in");
routes.add("account/sign-up", "account/sign-up", "account/sign-up");
routes.add("account/my-account", "account/my-account", "account/my-account");
routes.add("account/forgot-password", "account/forgot-password", "account/forgot-password");
routes.add("account/reset-password", "account/reset-password", "account/reset-password");
// cms pages routes
routes.add("cms/about-us", "cms/about-us", "cms/about-us");
routes.add("cms/privacy&policy", "account/privacy&policy", "account/privacy&policy");
routes.add("cms/t&c", "cms/t&c", "cms/t&c");