const user = {
    name: "John",
    age: 30,
    Email: "john#yopmail.com"
};

console.log(user);
console.log(user.name);

const key = "age";
console.log(user[key]);

user.city = "New York";
console.log(user); 

let obj = {name : "Login Test"};
console.log(Object.getOwnPropertyDescriptor(obj, "name"));