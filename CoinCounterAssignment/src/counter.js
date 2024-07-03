// counter.js


function coinCounterRecursive(amount,
                     coins = [25, 10, 5, 1],
                     counts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) {



    if (typeof amount === 'number' && amount % 1 !== 0) {
        amount = Math.round(amount * 100);
    }

    if (amount === 0) return counts;

    const coin = coins[0];
    const count = Math.floor(amount / coin);

    if (coin === 25) counts.quarters += count;
    else if (coin === 10) counts.dimes += count;
    else if (coin === 5) counts.nickels += count;
    else if (coin === 1) counts.pennies += count;

    return coinCounterRecursive(amount % coin, coins.slice(1), counts);
}


// Part 2: Closure-Based Coin Counter Function
function coinCounterClosure(amount) {
    amount = Math.round(amount * 100);
    let counts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

    function calculate(coins) {
        if (amount === 0) return counts;

        const coin = coins[0];
        const count = Math.floor(amount / coin);

        if (coin === 25) counts.quarters = count;
        else if (coin === 10) counts.dimes = count;
        else if (coin === 5) counts.nickels = count;
        else if (coin === 1) counts.pennies = count;

        amount %= coin;
        return calculate(coins.slice(1));
    }

    return calculate([25, 10, 5, 1]);
}

module.exports = { coinCounterRecursive, coinCounterClosure };
