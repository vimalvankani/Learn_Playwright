console.log(score); //ReferenceError    
let score = 100;
{
let score = 100;
console.log(score);
}