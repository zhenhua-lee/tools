# tools[![Build Status](https://travis-ci.org/zhenhua-lee/tools.svg?branch=master)](https://travis-ci.org/zhenhua-lee/tools)

##日常开发的一些想法

### http

- ajax.js(custom): 简单地实现异步请求


### mock

- mock.js(custom): 在实际开发中对http方法进行覆盖，实现前后端分离开发

- [superagent-mocker](https://github.com/rambler-digital-solutions/superagent-mocker): 对superagent进行数据的mock

- [mockjs](http://mockjs.com/): 数据模拟系统


### svg

- svg2sprite.js(custom): 将svg合成sprite的过程


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

