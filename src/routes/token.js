const router = require('koa-router')()
const tokenService = require('../services/token')

// get normal access token
router.get('/', async (ctx, next) => {
  let update = ctx.request.query.update || 'false'
  let accessToken = await tokenService.getAccessToken(update.toLowerCase() === 'true')
  ctx.body = accessToken
})

module.exports = router
