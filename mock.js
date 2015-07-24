var ajax = require('ajax');

var mockData = {name: 'eee'};

var Mock = {
    mock: function (mockObj) {
        var pre = ajax.get;
        ajax.get = function (obj) {
            if (mockObj.url.test(obj.url)) {
                obj.successFn(mockData);
            } else {
                pre.call(ajax, obj);
            }
        };
    }
};

// mock拦截器设置，拦截json格式的请求
Mock.mock({
    url: /\w*\.json/
});

// 发送请求ajax
ajax.get({
    url: './data.json',
    successFn: function (data) {
        console.dir(data);
    }
});
