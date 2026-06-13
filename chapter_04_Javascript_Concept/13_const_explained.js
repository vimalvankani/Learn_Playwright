const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.


let name = "pending";

name = "done";
{
    let name = "Vankani";
    console.log("Inside block:", name);   // Vankani
}

function say() {
    let name = "Vankani";
    console.log("Hi from Function", name);
}
say();
say();