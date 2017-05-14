const getAccessToken = require('wx-service').base.getAccessToken
const wx = require('wx-service')
const oauth = wx.oauth
const cache = wx.cache

exports.cacheAccessToken = async function () {
  let response = await getAccessToken()
  console.log(response)
  cache.accessToken = response.access_token
  cache.expiresIn = response.expires_in
}

exports.getAccessToken = async function (update) {
  if (update || !cache.accessToken) {
    await exports.cacheAccessToken()
  }
  return cache.accessToken
}

exports.getAuthorizeAccessToken = async function (code) {
  let response = await oauth.getAccessToken(code)
  console.log('authorized access token', response)
  return response.access_token
}

// update access token very 1.5h
setTimeout(exports.cacheAccessToken, 0)
setInterval(exports.cacheAccessToken, 60000 * 90)
