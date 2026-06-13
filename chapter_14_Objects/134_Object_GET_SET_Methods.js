const User = {
    firstname: "John",
    surname: "Smith",

    get fullname()
    {
        return this.firstname + this.surname;
    },

    set fullname(value) {
        [this.firstname, this.surname] = value.split(" ");
    }

}
console.log(User.fullname); // John Smith
User.fullname = "Alice Cooper";
console.log(User.fullname);