var test = require('tape')
var mountOne = require('../mountOne.js');

test('by divide', (t) => {
  t.equal(mountOne.divide(0), 0, 'the mount number-1 of 0 is 0');
  t.equal(mountOne.divide(1), 1, 'the mount number-1 of 1 is 1');
  t.equal(mountOne.divide(130), 2, 'the mount number-1 of 130 is 2');
  t.equal(mountOne.divide(7), 3, 'the mount number-1 of 7 is 3');
  t.equal(mountOne.divide(15), 4, 'the mount number-1 of 32 is 4');
  t.equal(mountOne.divide(255), 8, 'the mount number-1 of 255 is 8');

  t.end();
})

test('by right move', (t) => {
  t.equal(mountOne.rightMove(0), 0, 'the mount number-1 of 0 is 0');
  t.equal(mountOne.rightMove(1), 1, 'the mount number-1 of 1 is 1');
  t.equal(mountOne.rightMove(130), 2, 'the mount number-1 of 130 is 2');
  t.equal(mountOne.rightMove(7), 3, 'the mount number-1 of 7 is 3');
  t.equal(mountOne.rightMove(15), 4, 'the mount number-1 of 32 is 4');
  t.equal(mountOne.rightMove(255), 8, 'the mount number-1 of 255 is 8');

  t.end();
})

test('by right move', (t) => {
  t.equal(mountOne.justDealNumOne(0), 0, 'the mount number-1 of 0 is 0');
  t.equal(mountOne.justDealNumOne(1), 1, 'the mount number-1 of 1 is 1');
  t.equal(mountOne.justDealNumOne(130), 2, 'the mount number-1 of 130 is 2');
  t.equal(mountOne.justDealNumOne(7), 3, 'the mount number-1 of 7 is 3');
  t.equal(mountOne.justDealNumOne(15), 4, 'the mount number-1 of 32 is 4');
  t.equal(mountOne.justDealNumOne(255), 8, 'the mount number-1 of 255 is 8');

  t.end();
})
