"use strict";
function fib(n) {
    function inside(n, a, b) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 1; }
        if (n === 0) {
            return 0;
        }
        if (n <= 2) {
            return b;
        }
        return inside(--n, b, a + b);
    }
    return inside(n);
}
for (var i = 0; i <= 1000; i++) {
    console.log(fib(i));
}
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
