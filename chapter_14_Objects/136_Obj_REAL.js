const ENV ={
    Base_URL: "https://www.google.com",
    Timeout : 5000,
    Retries: 2,
    Browser: "Chrome"
}

const config = {

    baseUrl: 'https://www.google.com',
    apiBaseUrl: 'https://api.example.com',

    testUser: {
        username: 'testuser',
        password: 'password123' 
    },

    logLevel: 'INFO',

    retryCount: parseInt(process.env.RETRY_COUNT) || 3,

};