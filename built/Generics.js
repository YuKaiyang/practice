"use strict";
function createArray(len, val) {
    var res = [];
    for (var i = 0; i < len; i++) {
        res[i] = val;
    }
    return res;
}
var arr = createArray(10, 'o');
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
