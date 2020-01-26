var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //  BASE_URL: '"http://192.168.1.111:8080"'
  BASE_URL: '"http://127.0.0.1:8080"'
})
