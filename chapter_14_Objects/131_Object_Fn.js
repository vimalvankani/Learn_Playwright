const user = {
    name : "vimal",
    age : 36
};

console.log(user);
console.log(user.name);
console.log(user.age);

user.name = "vimal kumar";
console.log(user);

const calculator = {
    value : 5,
    add(n)
    {
        this.value += n;
    },

    subtract(n)
    {
        this.value -= n;
    }
}