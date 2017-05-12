const get = require('../utils/fetch').get

exports.getAccessToken = function (appId, appSecret) {
  return get('https://api.weixin.qq.com/cgi-bin/token', {
    grant_type: 'client_credential',
    appid: appId,
    secret: appSecret
  }).then(response => {
    if (response.access_token) {
      console.log('getAccessToken success', response)
      return {
        accessToken: response.access_token,
        expiresIn: response.expires_in
      }
    } else {
      console.warn('getAccessToken error', response)
      return {
        accessToken: '',
        expiresIn: 0
      }
    }
  })
}
