const wx = require('wx-service')

exports.createOrder = async function (request) {
  // create order
  let orderId = 'OID' + Date.now()

  console.log('createOrder', request, orderId)

  let response = await wx.pay.createOrder({
    body: '测试产品',
    out_trade_no: orderId,
    total_fee: request.totalFee,
    ip: request.ip,
    notify_url: 'http://wx-service.jackyang.me/pay/callback',
    openid: request.openid
  })

  console.log('createOrder response', response)
  return {
    signature: response.sign,
    prepayId: response.prepay_id,
    nonceStr: response.nonce_str
  }
}
