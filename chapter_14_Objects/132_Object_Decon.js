const user = { name2 : "vimal", age : 36 ,city : "Ahmedavad" };


const { name2  : username, age: userage, city: usercity } = user;
console.log(username);
console.log(userage);
console.log(usercity);

const data = {
    user3 : {
    name : "vimal",
    Address :
    {
        city : "Ahmedavad",
        state : "Gujarat"
    }
}
};

const { user: {  address } }  = data;
console.log  (data.user.address);