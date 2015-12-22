var test = require('tape');
var trans = require('../num2chinese.js');

test('test number to chinese', function (t) {
  t.equal(trans(2), '二');
  t.equal(trans(10), '十');
  t.equal(trans(16), '十六');
  t.equal(trans(58), '五十八');
  t.equal(trans(108), '一百零八');
  t.equal(trans(139), '一百三十九');
  t.equal(trans(319), '三百一十九');
  t.equal(trans(430), '四百三十');
  t.equal(trans(300), '三百');
  t.equal(trans(3001), '三千零一');
  t.equal(trans(6014), '六千零十四');
  t.equal(trans(6214), '六千二百一十四');
  t.equal(trans(3008), '三千零八');
  t.equal(trans(8000), '八千');

  t.end();
})