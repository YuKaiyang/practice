interface Array3 {
  [index: number]: number
}
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [7, 8, 9]
let arr3: Array3 = [4, 5, 6]

let fun1 = function (a: number, b: number): number {
  return a + b
}
function fun2(...params: any[]) {
  params.forEach(v => console.log(v))
}
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}

type lala = 'a' | 'b' | 'c'
let lala: lala = 'a'
lala = 'b'

let xcatliu: [string, number] = ['Xcat Liu', 25];
xcatliu[6] = 99

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

