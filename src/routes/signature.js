const router = require('koa-router')()
const sign = require('wx-service').base.sign

router.get('/', async (ctx, next) => {
  let request = ctx.request
  let signature = request.query.signature
  let echostr = request.query.echostr
  let sha1Result = sign(request.query.nonce, request.query.timestamp)

  if (sha1Result === signature) {
    console.log('signature verified successfully')
    ctx.body = echostr
  } else {
    console.log('signature verified failed')
    ctx.body = ''
  }
})

module.exports = router
