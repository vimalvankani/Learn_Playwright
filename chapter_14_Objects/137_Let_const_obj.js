let config1 = { browser: "chrome", timeout: 5000 };

config1.browser = "firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari"}
console.log(config1);

console.log("------------------------------");

const config2 = { browser: "chrome", timeout: 5000 };
config2.browser = "chrome";
config2.timeout = 5000;
config2.retries = 2;
console.log(config2);
console.log("------------------------------");