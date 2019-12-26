var Mock = require('./mock.js')
module.exports = {
  catalog: Mock.mock({
    "resultcode": '200',
    "reason": "请求成功",
    "result|5-17":[
      {
        "id|1": [
          "242",
          "243",
          "244",
          "245",
          "246",
          "247"
        ],
        "catalog|1": [
          '中国文学',
          '任务传记',
          '儿童文学',
          '历史',
          '哲学',
          '外国文学',
          '小说',
          '玄幻',
        ]
      }
    ]
  }),
  query: Mock.mock({
    "resultcode": '200',
    "reason": "请求成功",
    "result": {
      "data|5-20": [
          {
            "title|2-6": "测",
            "catalog|4-8": "测",
            "tags|10-30": "测",
            "sub1|8-20": "测",
            "sub2|100-300": "测",
            "img": Mock.Random.image('150x200', Mock.Random.color(), "#fff", 'book'),
            "reading": "1000人阅读",
            "bytime": Mock.Random.datetime('yyyy-MM-dd')

          }
        ],
      "totalNum|20-40": 30,
    },
    "error_code": 0
  })
}