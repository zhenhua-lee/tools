var ajax = {
    createXHR: function () {
        return new XMLHttpRequest()
    },
    get: function (obj) {
        var xhr = this.createXHR();
        xhr.open('get', obj.url, true);
        xhr.onreadystatechange = this.changeFn(xhr, obj);
        xhr.send(null);
    },
    changeFn: function (xhr, obj) {
        return function () {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    var data;
                    try {
                        data = JSON.parse(xhr.responseText);
                    } catch (e) {
                        throw new Error('error');
                    }
                    obj.successFn(data);
                } else {
                    obj.failureFn();
                }
            }

        }
    }
}
