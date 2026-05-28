let browser = ["chrome", "edge", "firefox", "safari"]; //length 4
console.log(browser[0]);

let scores = new Array(3); //here is 3 length of array but no values assigned yet
scores[0] = 10;
scores[1] = 20;
scores[2] = 30;

let scores2 = new Array(1, 2, 3); //here we are creating an array with 3 values and length of array is 3.

console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400, 500); //length 5
console.log(numbers);

let test = Array.of(1, 2, 3, 4, 5); //length 5
console.log(test);

let char = Array.from("Hello"); //length 5
console.log(char);

let numbers2 = Array.from("1234567890"); //length 10
console.log(numbers2);