let results = ["pass", "fail", "pass", "pass", "fail"];

results.indexOf("fail"); // returns the index of the first occurrence of "fail"
results.lastIndexOf("fail"); // returns the index of the last occurrence of "fail"         

results.includes("pass"); // returns true if "pass" is found in the array, otherwise false
results.includes("unknown"); // returns false as "unknown" is not found in the array

let numbers = [10,25,30,45,50];
let r = numbers.find(num => num > 25); // returns the first number greater than 25, which is 30
console.log(r);
let index = numbers.findIndex(num => num > 25); // returns the index of the first number greater than 25, which is 2
console.log(index);

let last = numbers.findLast(n=> n > 25); // returns the last number greater than 25, which is 50
console.log(last);

let lastIndex = numbers.findLastIndex(n=> n > 25); // returns the index of the last number greater than 25, which is 4
console.log(lastIndex);