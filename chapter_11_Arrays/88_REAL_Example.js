let browser = ["chrome", "firefox", "edge", "safari", "opera"];
console.log(browser.length);
console.log(browser);

browser.pop(); // remove last element
console.log(browser);

browser.push("opera"); // add element at the end of the array       
console.log(browser);

browser.shift(); // remove first element
console.log(browser);

browser.push("opera"); // add element at the end of the array       
console.log(browser);

let removedElement = browser.shift(); // remove first element and store it in a variable
console.log(browser);
console.log("Removed element:", removedElement);

for(let i=0; i<browser.length; i++){
    console.log(browser[i]);
    
    if(browser[i] === "opera"){
        console.log("Opera is removed from browser found at index:");
    }
}