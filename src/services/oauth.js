const wx = require('wx-service')
const oauth = wx.oauth

exports.getAuthorizeAccessToken = async function (code) {
  let response = await oauth.getAccessToken(code)
  console.log('authorized access token', response)
  return {
    accessToken: response.access_token,
    openid: response.openid
  }
}
