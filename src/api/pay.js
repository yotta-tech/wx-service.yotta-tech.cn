const fetch = require('node-fetch')
const randomString = require('randomstring')

// about request fields of createUnifiedOrder, please refer:
// https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
const DEFAULT_CREATE_UNIFIED_ORDER_REQUEST = {
  appid: '',
  mch_id: '',
  device_info: 'WEB',
  nonce_str: randomString.generate(13),
  sign: '',
  sign_type: 'MD5',
  body: '',
  detail: '',
  attach: '',
  out_trade_no: '',
  fee_type: 'CNY',
  total_fee: 0,
  spbill_create_ip: '',
  time_start: '',
  time_expire: '',
  goods_tag: '',
  notify_url: '',
  trade_type: 'JSAPI',
  product_id: '',
  limit_pay: 'no_credit',
  openid: ''
}

exports.createOrder = function (request) {
  return fetch('https://api.mch.weixin.qq.com/pay/unifiedorder', {
    method: 'post',
    headers: {
      'Accept':  'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
}

exports.queryOrder = function () {
  return fetch('https://api.mch.weixin.qq.com/pay/orderquery', {})
}

exports.closeOrder = function () {
  return fetch('https://api.mch.weixin.qq.com/pay/closeorder', {})
}

exports.refund = function () {
  return fetch('https://api.mch.weixin.qq.com/secapi/pay/refund', {})
}

exports.queryRefund = function () {
  return fetch('https://api.mch.weixin.qq.com/pay/refundquery', {})
}

exports.downloadBill = function () {
  return fetch('https://api.mch.weixin.qq.com/pay/downloadbill', {})
}

exports.report = function () {
  return fetch('https://api.mch.weixin.qq.com/payitil/report', {})
}
