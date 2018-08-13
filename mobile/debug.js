/* 移动端调试小工具，注入该js脚本，显示的信息分两种:
  - 将脚本执行过程中的错误显示出来
  - 选择性将用户打印的日志显示出来
*/
(function(isShowConsole){
  var doc = document;
  ['interactive', 'complete'].indexOf(doc.readystate) > -1 ? errorCallback() :
    doc.addEventListener('DOMContentLoaded', () => {
      errorCallback();
    });

  // DOM未形成之前，将错误暂存起来
  var storageConsole = [];
  window.$$dealException = function(str){
    storageConsole.push(str);
  }
  if (isShowConsole) {
    console.log = $$dealException;
  }

  window.addEventListener('error', function(e) {
    var str = `${e.filename} ${e.lineno}:${e.colno} => "${e.error.message}"`;
    $$dealException(str);
  });

  // 将错误信息的回调函数
  function errorCallback() {
    var ul = doc.createElement('ul');
    ul.style.cssText = 'padding-top: 15px; list-style: none; ' +
      'background-color: rgba(240, 173, 78, 0.8); border: 1px solid #ccc';
    doc.body.insertBefore(ul, doc.body.firstElementChild);
    // 展示错误信息
    var showError = function (item) {
      var li = doc.createElement('li');
      li.style.cssText = 'margin-bottom: 15px; line-hieght: 20px;'
      li.innerHTML = item;
      ul.appendChild(li);
    }
    // 修改dealException的方式
    $$dealException = function (str) {
      showError(str);
    }
    storageConsole.forEach((item) => {
      showError(item);
    })
  }
})(false);
