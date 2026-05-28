
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[2]); 

console.log(statuses.at(-1)); // skip   
console.log(statuses.at(-2)); // fail   
console.log(statuses.at(-3)); // pass       
console.log(statuses.at(-4)); // undefined