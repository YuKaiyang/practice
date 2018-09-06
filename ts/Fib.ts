function fib(n: number): number {
  function inside(n: number, a = 1, b = 1): any {
    if (n === 0) {
      return 0
    }
    if (n <= 2) {
      return b
    }
    return inside(--n, b, a + b)
  }
  return inside(n)
}

for (let i = 0; i < 16; i++) {
  console.log(fib(i))
}
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610