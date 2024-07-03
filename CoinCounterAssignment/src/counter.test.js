// counter.test.js

const { coinCounterRecursive, coinCounterClosure } = require('./counter');
const assert = require('assert');

function runTests() {
    testCoinCounter();
    testCoinCounterClosure();
    console.log("All tests passed!");
}

// Recursive
function testCoinCounter() {

    let result = coinCounterRecursive(4.99);
    assert.deepEqual(result, { quarters: 19, dimes: 2, nickels: 0, pennies: 4 }, `Test failed for amount 4.99: ${JSON.stringify(result)}`);


    result = coinCounterRecursive(0.99);
    assert.deepEqual(result, { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }, `Test failed for amount 0.99: ${JSON.stringify(result)}`);


    result = coinCounterRecursive(1.41);
    assert.deepEqual(result, { quarters: 5, dimes: 1, nickels: 1, pennies: 1 }, `Test failed for amount 1.41: ${JSON.stringify(result)}`);


    result = coinCounterRecursive(0.25);
    assert.deepEqual(result, { quarters: 1, dimes: 0, nickels: 0, pennies: 0 }, `Test failed for amount 0.25: ${JSON.stringify(result)}`);

    result = coinCounterRecursive(0.10);
    assert.deepEqual(result, { quarters: 0, dimes: 1, nickels: 0, pennies: 0 }, `Test failed for amount 0.10: ${JSON.stringify(result)}`);

    result = coinCounterRecursive(0.05);
    assert.deepEqual(result, { quarters: 0, dimes: 0, nickels: 1, pennies: 0 }, `Test failed for amount 0.05: ${JSON.stringify(result)}`);

    result = coinCounterRecursive(0.01);
    assert.deepEqual(result, { quarters: 0, dimes: 0, nickels: 0, pennies: 1 }, `Test failed for amount 0.01: ${JSON.stringify(result)}`);

    console.log("All tests passed for coinCounter!");
}

// Closure
function testCoinCounterClosure() {

    let result = coinCounterClosure(4.99);
    assert.deepEqual(result, { quarters: 19, dimes: 2, nickels: 0, pennies: 4 }, `Test failed for amount 4.99: ${JSON.stringify(result)}`);


    result = coinCounterClosure(0.99);
    assert.deepEqual(result, { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }, `Test failed for amount 0.99: ${JSON.stringify(result)}`);


    result = coinCounterClosure(1.41);
    assert.deepEqual(result, { quarters: 5, dimes: 1, nickels: 1, pennies: 1 }, `Test failed for amount 1.41: ${JSON.stringify(result)}`);


    result = coinCounterClosure(0.25);
    assert.deepEqual(result, { quarters: 1, dimes: 0, nickels: 0, pennies: 0 }, `Test failed for amount 0.25: ${JSON.stringify(result)}`);

    result = coinCounterClosure(0.10);
    assert.deepEqual(result, { quarters: 0, dimes: 1, nickels: 0, pennies: 0 }, `Test failed for amount 0.10: ${JSON.stringify(result)}`);

    result = coinCounterClosure(0.05);
    assert.deepEqual(result, { quarters: 0, dimes: 0, nickels: 1, pennies: 0 }, `Test failed for amount 0.05: ${JSON.stringify(result)}`);

    result = coinCounterClosure(0.01);
    assert.deepEqual(result, { quarters: 0, dimes: 0, nickels: 0, pennies: 1 }, `Test failed for amount 0.01: ${JSON.stringify(result)}`);

    console.log("All tests passed for coinCounterClosure!");
}

// Run the tests
runTests();
