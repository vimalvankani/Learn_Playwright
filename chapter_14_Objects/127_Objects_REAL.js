let config ={};

config.browser = "chrome";
config.version = "v1.0";
config.timeout = 3000;
config.testname = "Login Test";

console.log(config);

delete config.browser;
console.log(config);

if (config.browser === "chrome"){
    console.log("Test is running on chrome browser");
}