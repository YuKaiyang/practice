"use strict";
// class Animal {
//   constructor(name: string) {
//     this.name = name
//   }
//   protected name: string
//   sayHi() {
//     console.log(`My name is ${this.name}`)
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let a = new Animal('Jack')
// a.sayHi()
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   sayHi() {
//     console.log(`Meow! My name is ${this.name}`)
//   }
// }
// let c = new Cat('Tom')
// c.sayHi()
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        // 隐式返回this
        // return this
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + " is eating.");
    };
    Cat.prototype.sayHi = function () {
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
var mySearch = function (source) {
    return source.search('subString') !== -1;
};
function getCounter() {
    var counter = function (start) { };
    return counter;
}
var c = getCounter();
console.log(c.interval);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var p1 = new Person('yky');
