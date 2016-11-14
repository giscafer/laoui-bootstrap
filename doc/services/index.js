/**
 * Created by Giscafer
 */
let services = require.context("./", true, /.srv.js$/);
console.log(env);
export default angular.module("laoui.service", [])
    .factory('httpInterceptor', services("./httpInterceptor.srv.js").default.factory)
    .name;
