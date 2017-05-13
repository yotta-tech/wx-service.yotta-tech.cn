const router = require('koa-router')()
const getAuthorizeURL = require('wx-service').oauth.getAuthorizeURL

// let ip = ctx.headers['x-real-ip']

router.get('/demo', async (ctx, next) => {
  let url = getAuthorizeURL('http://wx-service.yotta-tech.cn/demo.html', 'snsapi_base')
  ctx.redirect(url)
})

module.exports = router
