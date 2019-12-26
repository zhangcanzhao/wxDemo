
// pages/weater/weater.js
const bmap = require('../../utils/bmap-wx.min.js')
const utils = require('./util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var BMap = new bmap.BMapWX({
      ak:'XY0DFzESGRxm5IvBCs5Nr9zma5ZnrwZa'
    })
    var fail = function(data){
      console.log(data)
    };
    var success = function(data){
      var weather = {}
      weather.city = data.currentWeather[0].currentCity;
      weather.date = data.currentWeather[0].date;
      weather.time = utils.formatTime(new Date());
      weather.temperature = data.currentWeather[0].temperature;
      weather.weatherDesc = data.currentWeather[0].weatherDesc;
      weather.weather_data = data.originalData.results[0].weather_data.splice(1, data.originalData.results[0].weather_data.length);
      console.log(weather)
      that.setData({
        weather: weather
      });
    }
    BMap.weather({
      fail: fail,
      success: success
    }); 
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})