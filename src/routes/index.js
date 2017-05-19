const router = require('koa-router')()
const signatureRouter = require('./signature')
const tokenRouter = require('./token')
const oauthRouter = require('./oauth')
const payRouter = require('./pay')
const pageRouter = require('./page')
const jsapiRouter = require('./jsapi')

router.use('/signature', signatureRouter.routes())
router.use('/token', tokenRouter.routes())
router.use('/oauth', oauthRouter.routes())
router.use('/pay', payRouter.routes())
router.use('/jsapi', jsapiRouter.routes())

router.use('/page', pageRouter.routes())

module.exports = router
