var test = require('tape');
var trans = require('../tenTransToAny.js');

test('change ten to any', function (t) {

  t.throws(function () {trans('sasa', 12)}, /first arguemt should be number/);
  t.throws(function () {trans(23, 32)}, /digis should between 2 and 20/);
  t.equal(trans(0, 17), +(0).toString(17));
  t.equal(trans(4, 3), (4).toString(3));
  t.equal(trans(534, 16), (534).toString(16));
  t.equal(trans(534, 2), (534).toString(2));

  t.end();
});