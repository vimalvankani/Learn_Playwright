function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
const r = runTest("Login", "pass", 320); // Login: pass (320ms)
console.log(r); // Login: pass (320ms)