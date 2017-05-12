const getAccessToken = require('wx-service').base.getAccessToken
const cache = {}

exports.cacheAccessToken = async function () {
  let response = await getAccessToken()
  cache.accessToken = response.access_token
  cache.expiresIn = response.expires_in
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
