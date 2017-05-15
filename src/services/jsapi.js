const wxService = require('wx-service')
const jsapi = wxService.jsapi
const cache = wxService.cache

exports.getConfig = async function (url) {
  let accessToken = cache.accessToken
  let ticket = await jsapi.getTicket(accessToken).then(r => r.ticket)
  let signResult = jsapi.sign(ticket, url)

  console.log('jsticket, url', ticket, url)
  signResult.appId = wxService.config.appId
  console.log('jspi.getConfig', signResult)
  return signResult
}
