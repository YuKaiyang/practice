function createArray<T>(len: number, val: T): Array<T> {
  let res: T[] = []
  for (let i = 0; i < len; i++) {
    res[i] = val
  }
  return res
}

let arr: Array<string> = createArray(10, 'o')

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });

interface Alarm {
  price: number
}

interface Alarm {
  weight: number
}