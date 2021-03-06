const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const koaLogger = require('koa-logger')
const router = require('./src/routes')
const cors = require('kcors')
const config = require('./src/config')
const WXService = require('wx-service')

const app = new Koa()
const HTTP_PORT = process.env.HTTP_PORT || 9002

// init wx-service
WXService.config.appId = config.APP_ID
WXService.config.appSecret = config.APP_SECRET
WXService.config.token = config.TOKEN
WXService.config.payKey = config.PAY_KEY
WXService.config.merchantId = config.MERCHANT_ID

// koa logger
app.use(koaLogger())

// cros
const ALLOW_CROSS_ORIGIN_DOMAINS = ['jackyang.me', 'yotta-tech.cn']
app.use(cors({
  origin (ctx) {
    let o = ctx.request.headers.origin
    if (ALLOW_CROSS_ORIGIN_DOMAINS.filter(domain => o.endsWith(domain)).length > 0) {
      return o
    }
  }
}))

// body parser
app.use(bodyParser())

// static files
app.use(serve('./src/public'))

// routes
app.use(router.routes())

app.listen(HTTP_PORT, () => {
  console.log(`app is running at port ${HTTP_PORT}`)
})
