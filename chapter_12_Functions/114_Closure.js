
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ }, // 0 = 0 + 1
        decrement() { count-- }, // 1 = 1 - 1
        get() { return count; } // 0
    }
}

let counter = makeCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
console.log(counter.get()); // 3
counter.decrement(); // 2
console.log(counter.get()); // 2