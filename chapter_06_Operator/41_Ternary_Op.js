let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 21 ? "Yes, he will go to Goa" : "No, he will not go to Goa";
console.log(rj_will_goa); // Output: No, he will not go to Goa


let a=10;
a += 10;
console.log(a); // Output: 20

let actualStatuCode = 200;
let ExpectedStatusCode = 200;
let status = actualStatuCode === ExpectedStatusCode ? "Test Passed" : "Test Failed";
console.log(status); // Output: Test Passed 

let environment = "staging";
let baseUrl = environment === "production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl); // Output: https://staging-api.example.com

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in",browserMode,"mode"); // Output: headless


let respobseTime = 850;
let sls = 1000;
let slsStatus = respobseTime <= sls ? "Within SLS" : "Exceeds SLS";
console.log(`Response: ${respobseTime}ms - ${slsStatus}`); // Output: Response: 850ms - Within SLS

let condition = true;
let isSKMale =condition ? true : false;
console.log(isSKMale); // Output: true

let isSKFemale = !condition ? true : false;
console.log(isSKFemale); // Output: false   

//Nested Ternary Operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Score: ${score}, Grade: ${grade}`); // Output: Score: 85, Grade: B

let age = 25;
let is_vimal_goa = age > 25? "Yes, he will go to Goa" : age === 25 ? "He is on the edge, might go to Goa" : "No, he will not go to Goa";
console.log(is_vimal_goa); // Output: He is on the edge, might go to Goa

let age_vimal = 35;
let is_vimal_d = age_vimal > 18 ? (age_vimal > 25 ? "Drink" : "No Drink") : "No Goa";
console.log(is_vimal_d); // Output: Drink

let statusCode = 404;
let category = 
statusCode < 300 ? "Success" :
statusCode < 400 ? "Redirection" :
statusCode < 500 ? "Client Error" :
statusCode < 600 ? "Server Error" : "Unknown Status Code";
console.log(`Status Code: ${statusCode}, Category: ${category}`); // Output: Status Code: 404, Category: Client Error

let temp = 35;
let feel = (temp >=40) ? "VeryHot" : 
(temp >= 30) ? "Hot" : 
(temp >= 20) ? "Warm" :
(temp >= 10) ? "Cool" : "Cold";
console.log(`Temperature: ${temp}°C, Feels: ${feel}`); // Output: Temperature: 35°C, Feels: Warm
