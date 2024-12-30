"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printresult(num) {
    console.log('Result: ', num);
}
printresult(add(5, 12));
let combinedvalues = add;
console.log(combinedvalues(10, 20)); // Outputs: 30
