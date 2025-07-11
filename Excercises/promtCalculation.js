// 1) Prompt user for information using exact prompts 
let userName = prompt('Please enter your name: ');
let var1 = prompt('Please enter a number between 1 and 10: ');
let var2 = prompt('Please enter a number between 11 and 20: ');

// 2) userName is already stored above

// 3) Store inputted numbers in var1 and var2 (convert to numbers)
var1 = Number(var1);
var2 = Number(var2);

// 4) Multiply the numbers together and store in userResult
let userResult = var1 * var2;

// 5) Thank the user and display the result using console.log with concatenation
console.log("Thank you, " + userName + ". The result is " + userResult + ".");

// 6) Draw a triangle using var1 as the number of lines
function drawTriangle(lines) {
    const outputDiv = document.getElementById("output");
    let result = "";

    for (let i = 1; i <= lines; i++) { // outer loop for rows
        let line = "";
        for (let j = 1; j <= i; j++) { // inner loop for stars
            line += "*";
        }
        result += line + "\n";
    }

    outputDiv.textContent = result;
}

// 7) Call drawTriangle using var1 for the height
drawTriangle(var1);

// 8) Save this file as promptCalculation.js

