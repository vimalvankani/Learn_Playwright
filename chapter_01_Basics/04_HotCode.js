console.log("Hello World");

function add(a, b) {
    return a + b;
    console.log("This will never be printed");
}

let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);