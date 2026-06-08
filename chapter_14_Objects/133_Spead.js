const obj1 = {a: "1",  b: 2};
const obj2 = {C:3, d:4};

const copy = {...obj1, ...obj2};
console.log(copy);