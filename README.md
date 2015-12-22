# tools[![Build Status](https://travis-ci.org/zhenhua-lee/tools.svg?branch=master)](https://travis-ci.org/zhenhua-lee/tools)

## 日常开发的想法及尝试

- algorithm: 编写算法，不做码农
- demo: 一些技术点的工具
- http: HTTP协议、请求有关的内容
- mock: 数据mock
- unit-test: 单元测试
- thinking: 技术点的思路、想法

## 辅助工具

- [gulp](https://github.com/gulpjs/gulp/tree/master/docs)：task runner

- [superagent](http://visionmedia.github.io/superagent/): 请求的发送

- [componentjs](https://github.com/componentjs/component): 进行样式管理

- [browserify/watchify](https://github.com/substack/node-browserify): module打包工具

- [travis-ci](https://travis-ci.org/): 用于项目的CI

- [envify](https://www.npmjs.com/package/envify): 用于区分development、production环境，这个工具很好用，例如将mock代码放到if (process.env.NODE_ENV="developement")中，上线的时候通过uglify2就可以把mock代码部分去掉

- [UglifyJS2](https://github.com/mishoo/UglifyJS2): 用于代码的压缩、精简

- [hightlight.js](https://github.com/isagalaev/highlight.js): 用于实现代码的高亮

- [karma](http://karma-runner.github.io/0.13/index.html): test runner，对测试过程进行管理

- [nodemon](http://nodemon.io/): 在node开发时，当文件发生改变时，可以自动监控文件的变化，无需重新启动，nodemon.json是先关的配置文件.

