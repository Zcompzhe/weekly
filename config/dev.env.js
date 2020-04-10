// 开发环境和生产环境
// 1、开发环境需要配置index.js下的proxy
// 2、开发环境需要修改userApi下添加/apis
// 3、main.js下的照片路径需要修改
// 4、本文件下的BASE_URL、USER_URL需要修改



var merge = require("webpack-merge");
var prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://139.224.25.25:8080"',
  USER_URL: '"http://139.224.25.25:8001"'
  // BASE_URL: '"http://127.0.0.1:8080"',
  // USER_URL: '"http://127.0.0.1:8001"',
});
