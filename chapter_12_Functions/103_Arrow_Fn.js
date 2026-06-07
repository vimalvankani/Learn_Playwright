const doubleIT = n => n * 2;
console.log(doubleIT(10));

const printIt = name => console.log(name);
printIt("John");

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

const add2 = ({ a, b }) => a + b;

function say(){
    console.log("Hello");
}

const say1 = () => console.log("Hello");
const say2 = () => "Hello";

const greet = (name) => {
    const message ="Hello" + name;
    return message;
}
