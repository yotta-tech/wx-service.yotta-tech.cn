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
}
