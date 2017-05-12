const sha1 = require('sha1')
const router = require('koa-router')()
const config = require('../config')

//router.use('/api/upload', uploadRouter.routes())
router.get('/', async (ctx, next) => {
  let request = ctx.request
  let signature = request.query.signature
  let timestamp = request.query.timestamp
  let echostr = request.query.echostr
  let nonce = request.query.nonce
  let token = config.TOKEN
  let concatString = [nonce, timestamp, token].sort().join('')
  let sha1Result = sha1(concatString)

  console.log('query', request.query)
  console.log(`concatString ${concatString}`)
  console.log(`sha1Result ${sha1Result}`)

  if (sha1Result === signature) {
    ctx.body = echostr
  } else {
    ctx.body = ''
  }
})

module.exports = router
