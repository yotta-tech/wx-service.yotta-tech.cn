const router = require('koa-router')()
const oauthService = require('../services/oauth')

router.get('/accesstoken', async (ctx, next) => {
  let code = ctx.request.query.code
  let accessToken = await oauthService.getAuthorizeAccessToken(code)
  ctx.body = accessToken
})

module.exports = router
