'use strict'
const config = require('../templates')

module.exports = () => {
     //console.log(config.tpl)
     // console.log(`项目名称：${config.tpl}`)
     config.tpl.forEach((element, index) => {
          console.log(`第${index + 1}条数据`)
          console.log(`-模板索引：${index + 1} \n-模板名称：${element.name} \n-模板描述：${element.describe}`)
     });
     process.exit()
}