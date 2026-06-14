function add(a, b, c) {

    return a + b + c; // 6

}
let num = [1, 2, 3];
add(...num);
console.log(add(...num));

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400); // true
}
hasError(...responseCodes); // true
console.log(hasError(...responseCodes));