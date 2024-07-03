// index.js
const { coinCounterRecursive, coinCounterClosure } = require('./counter');

// Example usage for coinCounter
const change1 = coinCounterRecursive(4.88);
console.log("Recursive Coin Counter:", change1);

// Example usage for coinCounterClosure
const change2 = coinCounterClosure(4.99);
console.log("Coin Counter Using Closure:", change2);
