
let age: number = 20;

let username: string = "John";

let isLoggedIn: boolean = true;

let marks: number[] = [80, 85, 90];

let person: [string, number] = ["Alice", 25];

enum Role {
    Admin,
    User,
    Guest
}
let userRole: Role = Role.Admin;

let randomValue: any = 10;
randomValue = "Hello";


let value: unknown = "Hi";


function logMessage(): void {
    console.log("This is a message");
}


let n: null = null;
let u: undefined = undefined;

console.log(age, username, isLoggedIn, marks, person, userRole);