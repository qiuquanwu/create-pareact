'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const chalk = require('chalk')

module.exports = () => {
 co(function *() {
    // 处理用户输入
      let tplName = yield prompt('模板索引(不输入则选择默认模板): ')
      if(tplName==""){
        tplName=0
      }
      let projectName = yield prompt('输入项目名称: ')
      let gitUrl
      
      let branch

    if (!config.tpl[tplName]) {
        console.log(chalk.red('\n × 模板不存在!'))
        process.exit()
    }
    gitUrl = config.tpl[tplName].url
    branch = config.tpl[tplName].branch

    // git命令，远程拉取项目并自定义项目名
    let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`

    console.log(chalk.white('\n 正在生成项目,请稍后... \n'+cmdStr))

    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        if(error.code==128){
          console.log('创建失败，文件夹已经存在！')
        }
        process.exit()
      }
      console.log(chalk.green('\n √ 生成完成!'))
      console.log(`\n cd ${projectName} && npm install \n`)
      process.exit()
    })
  })
}