const tokenAPI = require('../api/token')
const config = require('../config')
const cache = {}

exports.cacheAccessToken = async function () {
  let response = await tokenAPI.getAccessToken(config.APP_ID, config.APP_SECRET)
  cache.accessToken = response.accessToken
  cache.expiresIn = response.expiresIn
}

exports.getAccessToken = async function (update) {
  if (update || !cache.accessToken) {
    await exports.cacheAccessToken()
  }
  return cache.accessToken
}

// update access token very 1.5h
exports.cacheAccessToken()
setTimeout(exports.cacheAccessToken, 60000 * 90)
