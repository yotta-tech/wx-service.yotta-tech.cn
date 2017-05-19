const getAccessToken = require('wx-service').base.getAccessToken
const wx = require('wx-service')
const cache = wx.cache
let accessTokenJobStarted = false

exports.cacheAccessToken = async function () {
  let response = await getAccessToken()
  cache.accessToken = response.access_token
  cache.expiresIn = response.expires_in
  cache.expiresAt = Date.now() + response.expires_in
  console.log('accesstoken cache refreshed', cache)
}

exports.getAccessToken = async function (update) {
  if (update || !cache.accessToken || cache.expiresAt < Date.now()) {
    await exports.cacheAccessToken()
  }

  if (!accessTokenJobStarted) {
    setInterval(exports.cacheAccessToken, cache.expiresIn * .9 * 1000)
    accessTokenJobStarted = true
  }

  return cache.accessToken
}
