var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //  BASE_URL: '"http://139.224.25.25:8080"'
  BASE_URL: '"http://127.0.0.1:8080"',
  USER_URL: '"http://127.0.0.1:8001"',
})
