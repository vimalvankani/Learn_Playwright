let firstname = "Vimal Raj";
let fullname = `Hi ${firstname} Vankani`;
console.log(firstname);

const env = "Staging";
env = "prod";
const userId = 12345;
const apiUrl = `http://api-${env}.tekion.com/users/${userId}`;
console.log (   apiUrl);

//Playwright
const rowIndex = 3;
const columnName = "Email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();