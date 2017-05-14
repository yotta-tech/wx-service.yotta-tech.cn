const router = require('koa-router')()
const jsapiService = require('../services/jsapi')

router.get('/config', async (ctx, next) => {
  let url = decodeURIComponent(ctx.request.query.url)
  let config = await jsapiService.getConfig(url)
  ctx.body = config
})

module.exports = router
