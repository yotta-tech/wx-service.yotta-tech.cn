const sha1 = require('sha1')
const router = require('koa-router')()
const TOKEN = require('../config').TOKEN

function sign (nonce, timestamp, token) {
  return sha1([nonce, timestamp, token].sort().join(''))
}

router.get('/', async (ctx, next) => {
  let request = ctx.request
  let signature = request.query.signature
  let echostr = request.query.echostr
  let sha1Result = sign(request.query.nonce, request.query.timestamp, TOKEN)

  if (sha1Result === signature) {
    console.log('signature verified successfully')
    ctx.body = echostr
  } else {
    console.log('signature verified failed')
    ctx.body = ''
  }
})

module.exports = router
