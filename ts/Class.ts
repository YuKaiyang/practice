// class Animal {
//   constructor(name: string) {
//     this.name = name
//   }
//   protected name: string
//   sayHi() {
//     console.log(`My name is ${this.name}`)
//   }
// }

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

abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
    // 隐式返回this
    // return this
  }
  abstract sayHi(): void;
}

class Cat extends Animal {
  eat() {
    console.log(`${this.name} is eating.`);
  }
  sayHi() {

  }
}

let cat = new Cat('Tom');

interface SearchFunc {
  (a: string, b: string): boolean;
}
let mySearch: SearchFunc = function (source: string) {
  return source.search('subString') !== -1
}
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) { }
  return counter
}

let c: Counter = getCounter()
console.log(c.interval)

class Person {
  constructor(name: string) {
    this.name = name
  }
  name: string
}

let p1: Person = new Person('yky')
