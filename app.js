const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const router = require('./src/routes')

const app = new Koa()
const HTTP_PORT = process.env.HTTP_PORT || 3000

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
