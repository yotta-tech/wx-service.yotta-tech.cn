const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const router = require('./src/routes')
const WXService = require('wx-service')
const config = require('./src/config')

const app = new Koa()
const HTTP_PORT = process.env.HTTP_PORT || 3000

// init wx-service
WXService.CONFIG.appId = config.APP_ID
WXService.CONFIG.appSecret = config.APP_SECRET
WXService.CONFIG.token = config.TOKEN

// koa logger
app.use(koaLogger())

// body parser
app.use(bodyParser())

// routes
app.use(router.routes())

/*app.use(async ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body
})*/


app.listen(HTTP_PORT, () => {
  console.log(`app is running at port ${HTTP_PORT}`)
})
