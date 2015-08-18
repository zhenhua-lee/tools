// 模拟browserify的模块打包机制
var require = (function () {
    var newRequire(id) {
        if (!cache[id]) {
            function innerRequire (path) {
                var id = modules[id][1][path];
                return newRequire(id);
            }
            var m = cache[name] = {exports: {}};
            modules[id][0].call(m.exports, innerRequire, m, m.exports)
        }
        return cache[id].exports;
    }
    entry.forEach(function (id) {
        newRequire(id);
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
    }
}
var cache = {}
var entry = ['1'];