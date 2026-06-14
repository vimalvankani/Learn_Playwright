let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 100;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);
}