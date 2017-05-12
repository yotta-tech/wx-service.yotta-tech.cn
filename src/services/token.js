const tokenAPI = require('../api/token')
const config = require('../config')
const cache = {}

exports.cacheAccessToken = async function () {
  let response = await tokenAPI.getAccessToken(config.APP_ID, config.APP_SECRET)
  cache.accessToken = response.access_token
  cache.expiresIn = response.expires_in
}

exports.getAccessToken = async function (update) {
  if (update || !cache.accessToken) {
    await exports.cacheAccessToken()
  }
  return cache.accessToken
}
