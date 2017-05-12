const fetch = require('node-fetch')

exports.getAccessToken = function (appId, appSecret) {
  return fetch(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`, {
    method: 'get',
    headers: {
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
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
