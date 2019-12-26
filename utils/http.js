var api = require('./api.js')
var mockApi = require('./wxMockapi.js')
var util = require('./util.js')
// 真实请求
function http(params,cb){
   wx.showToast({ icon: 'loading', duration: 10000})
  wx.request({
    url: api.apiUrl + params.url,
    data: params.data,
    method: params.method || 'POST',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      var data = res.data
       wx.hideToast()
      if (data.error_code == 0 && data) {
        cb(data)
      } else {
        wx.showToast({
          title: data.reason || "服务器繁忙，请稍后再试",
          icon: "none"
        })
      }
    },
    fail: function (e) {
      wx.hideToast()
      wx.showToast({
        title: e.reason || "服务器繁忙，请稍后再试",
        icon: "none"
      })
    }
  })
}
// mock模拟请求
function http2(params,cb){
  setTimeout(() => {
    for (var key in api.apiList) {
      if (api.apiList[key] == params.url) {
        var data = mockApi[key]
        if (data.error_code == 0 && data) {
          cb(data)
        } else {
          cb(data)
        }
      }
    }
  }, 500)
}

module.exports = {
  api:http
}