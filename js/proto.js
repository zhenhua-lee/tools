function Parent() {}
Parent.prototype = {
  showAge: function() {
    console.log('age is: ', this.age);
  }
}

// method1: 通过new Parent的方式
function Child(age) {
  // Parent.call(this);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

var cc = new Child(6);
cc.showAge();
// 上述方式存在的问题: Child的原型中存在未定义的name属性

// method2: 通过空函数实现
function createObjByProto(proto) {
  function Temp() {}
  Temp.prototype = proto;
  return new Temp;
}
function Child2(age) {
  this.age = age;
}
Child2.prototype = createObjByProto(Parent.prototype);
var cc2 = new Child2(66);
cc2.showAge();

// method3: 借助于非正规的属性__proto__
function Child3(age) {
  this.age = age;
}
var cc3 = new Child3(666);
cc3.__proto__ = Parent.prototype;
cc3.showAge();

// method4: 使用Object.create创建
function Child4(age) {
  this.age = age;
}
Child4.prototype = Object.create(Parent.prototype);
var cc4 = new Child4(6666);
cc4.showAge();

// method5: 使用Object.setPrototypeOf
function Child5(age) {
  this.age = age;
}
var cc5 = new Child5(66666);
Object.setPrototypeOf(cc5, Parent.prototype);
cc5.showAge();
