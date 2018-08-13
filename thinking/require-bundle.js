// 模拟browserify的模块打包机制
var require = (function (modules, cache, entry) {
    var newRequire(key) {
        if (!cache[key]) {
            function innerRequire (path) {
                var key = modules[key][1][path];
                return newRequire(key);
            }
            var m = cache[name] = {exports: {}};
            modules[key][0].call(m.exports, innerRequire, m, m.exports)
        }
        return cache[key].exports;
    }
    entry.forEach(function (key) {
        newRequire(key);
    })

    // 在外部可以使用require(path)
    return newRequire;
})(modules, cache, entry)


// 对node的模块进行依赖解析，得到一个json数据
var modules = {
    '1': [
        function (require, module, exports) {
            // source ...
        },
        {
            './path': '2' // 定义该模块的依赖
        }
    ],
    '2': {
        function (require, module, exports) {
            // source ...
        },
        {
            // dependecies
        }
    },
    key: {
        fn,
        {
            // 依赖
        }
    }
}
var cache = {}
var entry = ['1'];