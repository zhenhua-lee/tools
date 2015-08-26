function html(el, html) {
    if (!html) {
        return el.innerHTML = '';
    }
    el.innerHTML = html;
}

var assert = require('assert');
suite('html');

test('should set inner html', function() {
    var el = document.createElement('div');
    html(el, '<p>foobar</p>');
    assert.equal(el.innerHTML, '<p>foobar</p>');
});

test('should clear inner html', function() {
    var el = document.createElement('div');
    el.innerHTML = 'foobar';
    html(el);
    assert.equal(el.innerHTML, '');
});