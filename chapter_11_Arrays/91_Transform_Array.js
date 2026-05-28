let scores = [45,56,85,96,87,38];

 //map - transform each element of the array and return a new array

 let grades = scores.map(s=> s>70 ? "pass" : "fail");
 console.log(grades);


 //filter - filter the elements of the array based on a condition and return a new array

 let passing = scores.filter(s=> s>70);
 console.log(passing);  


 //reduce - reduce the array to a single value based on a condition

 let total = scores.reduce((a, b) => a + b, 0);
 console.log(total);

 //flat - flatten a nested array   
let nestedArr = [[1,2], [3,4], [5,6]];
console.log(nestedArr);

let flatArr = nestedArr.flat();
console.log(flatArr);