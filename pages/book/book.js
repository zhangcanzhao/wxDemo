// pages/book/book.js
var http = require("../../utils/http.js");
var api = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: "ae3c1f438e6c3c657ea8003880a78f90",
    catalogList: [],
    list: [],
    num: '',
    page: 0,
    pageNo: 10,
    totalNum: '',
    ifLoding: false,
    tips: "加载中"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let params = {
      url: api.apiList.catalog,
      method: "GET",
      data:{
        key: that.data.key
      }
    }
    http.api(params,function(res){
      that.setData({
        num: res.result[0].id,
        catalogList: res.result
      })
      that.getBooks()
    })
  },
  clickTitle:function(e){
    this.setData({
      num: e.target.dataset.id,
      list: [],
      page: 0,
      pageNo: 10,
      ifLoding: false,
    })
    this.getBooks(e.target.dataset.id)
  },
  // 滚动触底回调
  lower(){
    let lastNum = this.data.totalNum - (this.data.page + this.data.pageNo);
    console.log(lastNum)
    if (lastNum < 0){
      this.setData({
        tips: "没有更多了",
      })
    } else {
      this.setData({
        page: this.data.page + this.data.pageNo,
      })
      this.getBooks()
    }
  },
  // 获取详细数据
  getBooks(){
    var that = this;
    let params = {
      url: api.apiList.query,
      method: "GET",
      data: {
        key: that.data.key,
        catalog_id: that.data.num.toString(),
        pn: that.data.page,
        rn: that.data.pageNo,
      }
    }
    http.api(params, function (res) {
      let newArray = that.data.list.concat(res.result.data)
      that.setData({
        list: newArray,
        totalNum: res.result.totalNum,
        ifLoding: true
      })
    })
  },
  // 图片加载失败回调
  errorFunction: function(e){
    console.log(e)
    if (e.type == "error") {
      var index = e.currentTarget.dataset.index
      var newList = this.data.list
      newList[index].img = "http://img12.3lian.com/gaoqing02/02/93/37.jpg"
      this.setData({
        list: newList
      })
    }
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