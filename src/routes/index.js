const router = require('koa-router')()
const signatureRouter = require('./signature')
const tokenRouter = require('./token')

router.use('/signature', signatureRouter.routes())
router.use('/token', tokenRouter.routes())

module.exports = router
