## 实现服务器推送, 启动方式如下:

**step1:**

  	node ./server.js

**step2:**

  	// 浏览器, open http://localhost:3001/static/test.html

**step3:**

  	// 打开chrome develop tool，可以看到推送的信息

## 注意点:

- content-type只能是`text/event-stream`
- 返回的代码片段需要通过换行来实现: '\n\n'