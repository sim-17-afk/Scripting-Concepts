// All Conditional Statements in One File
export {};
// 1. Simple if
let age: number = 20;

if (age >= 18) {
    console.log("You are an adult");
}

// 2. if-else
let num: number = 7;

if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 3. if-else-if ladder
let marks: number = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 4. Nested if
let username: string = "admin";
let password: string = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}

// 5. Switch case
let day: number = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// 6. Ternary operator
let number: number = 10;

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("Ternary result:", result);

// 7. Logical operators in condition
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

if (isLoggedIn && isAdmin) {
    console.log("Admin access granted");
} else if (isLoggedIn && !isAdmin) {
    console.log("User logged in but not admin");
} else {
    console.log("Not logged in");
}