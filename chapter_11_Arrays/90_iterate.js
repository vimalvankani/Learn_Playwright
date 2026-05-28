
let tests = ["login", "signup", "checkout", "search", "profile"];

for (let i=0; i<tests.length; i++){
    console.log(tests[i]);
}
console.log("------------------------------");

for(test of tests){
    console.log(test);
}

console.log("------------------------------");

tests.forEach((test, index) => {
    console.log(test, " = " +index )
});

console.log("------------------------------");

let students = ["Vimal", "Suresh", "Ramesh", "Ganesh", "Kumar"];

for(let student in students){
    console.log(student, "=>", students[student]);
}