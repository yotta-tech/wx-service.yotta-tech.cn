const wxService = require('wx-service')
const jsapi = wxService.jsapi
const cache = wxService.cache
const randomString = wxService.utils.string.random

exports.getConfig = async function (url) {
  console.log('cache', cache)
  console.log('url', url)
  let accessToken = cache.accessToken
  let ticket = await jsapi.getTicket(accessToken).then(r => r.ticket)
  let nonceStr = randomString(16)
  let timestamp = Date.now()
  let signature = jsapi.sign(nonceStr, timestamp, ticket, url)

  return {
    appId: wxService.config.appId,
    nonceStr,
    timestamp,
    signature
  }
}
