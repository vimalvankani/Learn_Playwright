//Question 1 — Even or Odd
//Problem: Take a number and print whether it's even or odd.

let num = 7;
if (num %2 === 0)
{
    console.log("The number is even.");
}
else
{
    console.log("The number is odd.");  
}

// Question 2 — Student Grade Calculator

// Problem: Take marks (0–100) and print the grade based on these rules:
// - 90 and above → A
// - 80–89 → B
// - 70–79 → C
// - 60–69 → D
// - Below 60 → Fail

let marks = 88;
if(marks >= 90  && marks <= 100)
{
    console.log("Grade: A");
}
else if(marks >= 80 && marks <= 89)
{
    console.log("Grade: B");
}
else if(marks >= 70 && marks <= 79)
{
    console.log("Grade: C");
}
else if(marks >= 60 && marks <= 69)
{
    console.log("Grade: D");
}
else
{
    console.log("Grade: Fail");
}

// Question 3 — Leap Year Check
// Problem: Take a year and check if it's a leap year.
// Rules:
// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year
let year = 2026;
if ((year % 4 === 0 ) || year % 400 === 0)
{
    console.log("The year is a leap year.");
}
else
{
    console.log("The year is not a leap year.");
}