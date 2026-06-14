function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}


retry("Login Test"); // Login Test up to 3 times, 1000ms apart
retry("Registeration Test", 5, 2000); // Registeration Test up to 5 times, 2000ms apart