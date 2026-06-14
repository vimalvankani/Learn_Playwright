const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Vimal");
console.log(r);


// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Jay Shree Ram"));
console.log(greet2("Jay Shree Krishna"));