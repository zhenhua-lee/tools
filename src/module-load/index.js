var Base = require('./baseClass');

var b1 = new Base();

console.log('first instance, fist regist', b1.register('11111'));
console.log('first instance, second regist', b1.register('22222'));

var b2 = new Base();
console.log('second instance, first regist', b2.register('33333'));
console.log('second instance, second regist', b2.register('44444'));

console.dir(b1);
console.dir(b2)


