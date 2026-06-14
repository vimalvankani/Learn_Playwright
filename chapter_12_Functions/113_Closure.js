function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer(); // function call

fn_inner(); // hello

// inner(); // ReferenceError: inner is not defined