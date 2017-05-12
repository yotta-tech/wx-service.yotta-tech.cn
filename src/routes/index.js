const router = require('koa-router')()
const signatureRouter = require('./signature')
const tokenRouter = require('./token')
const payRouter = require('./pay')

router.use('/signature', signatureRouter.routes())
router.use('/token', tokenRouter.routes())
router.use('/pay', payRouter.routes())

module.exports = router
