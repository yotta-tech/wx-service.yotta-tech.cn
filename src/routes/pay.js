const router = require('koa-router')()
const payService = require('../services/pay')

router.get('/', async (ctx, next) => {

})

// create order
router.post('/order', async (ctx, next) => {
  let response = await payService.createOrder({
    totalFee: ctx.request.body.totalFee,
    openid: ctx.request.body.openid,
    ip: ctx.headers['x-real-ip']
  })
  ctx.body = response
})

router.get('/callback', async (ctx, next) => {
  ctx.body = ''
})

router.post('/callback', async (ctx, next) => {
  ctx.body = ''
})

module.exports = router
