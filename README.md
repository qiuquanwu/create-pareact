## 简介
 用于创建基于parcel打包工具的react项目脚手架
## 使用方法
#### 1.安装

```

git clone https://github.com/qiuquanwu/create-pareact.git
或者
git clone https://gitee.com/isfive/create-pareact.git

cd create-pareact

npm i

npm link
```
#### 2.查看模板列表
```
pareact l 或者 pareact list
```
打印结果如下：
```
Administrator@HC2BRAWHM5PLI0M MINGW64 ~/Desktop/create-pareact (master)
$ pareact l
-第1条数据
-模板索引：1
-模板名称：pareact
-模板描述：基于parcel打包react,react-router,react-redux,stylus的项目
```
#### 3.初始化项目
```
pareact i 或者 pareact init
```
打印结果如下：
```
Administrator@HC2BRAWHM5PLI0M MINGW64 ~/Desktop/create-pareact (master)
$ pareact i
模板索引(不输入则选择默认模板):

```
输入模板索引（不输入默认为1）和项目名称，回车即可创建项目。
```
Administrator@HC2BRAWHM5PLI0M MINGW64 ~/Desktop/create-pareact (master)
$ pareact i
模板索引(不输入则选择默认模板):
输入项目名称: app

 正在生成项目,请稍后...


```
#### 4.帮助信息

```
pareact -h
```
打印结果如下：
```
Administrator@HC2BRAWHM5PLI0M MINGW64 ~/Desktop/pareact (master)
$ pareact -h
Usage: pareact <command>

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  list|l         列出所有模板
  init|i         生成新项目

```
#### 5.获取版本号

```
pareact -V 或者 pareact --version
```
打印结果如下：
```
Administrator@HC2BRAWHM5PLI0M MINGW64 ~/Desktop/create-pareact (master)
$ pareact -V
1.0.0

```
