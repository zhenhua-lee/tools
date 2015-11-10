var test = require('tape');
var buildLink = require('./build.js');
var reverse = require('./reverse.js');

test('reverse link', function(t) {
  var head = buildLink();
  t.deepEqual(head, {next: {data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: {data: 5, next: null}}}}}})

  var newHead = reverse(head);
  t.deepEqual(head, {next: {data: 5, next: {data: 4, next: {data: 3, next: {data: 2, next: {data: 1, next: null}}}}}})
  t.end();
})

