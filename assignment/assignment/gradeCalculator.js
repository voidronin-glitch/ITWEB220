const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate letter grade
function getLetterGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Function to run the grade calculator
function runProgram() {
    rl.question("Enter the number of assignments to grade (max 10): ", function (numAssignments) {
        numAssignments = parseInt(numAssignments);

        if (isNaN(numAssignments) || numAssignments < 1 || numAssignments > 10) {
            console.log("Invalid number of assignments. Please enter a number between 1 and 10.");
            return runProgram();
        }

        let total = 0;
        let count = 0;

        function getScore() {
            if (count < numAssignments) {
                rl.question(`Enter score for assignment ${count + 1} as a percentage (0-100): `, function (score) {
                    score = parseFloat(score);

                    if (isNaN(score) || score < 0 || score > 100) {
                        console.log("Invalid score. Please enter a percentage between 0 and 100.");
                        return getScore();
                    }

                    total += score;
                    count++;
                    console.log(`Current average: ${(total / count).toFixed(2)}%`);
                    getScore();
                });
            } else {
                let average = total / numAssignments;
                let letterGrade = getLetterGrade(average);
                console.log(`Final average: ${average.toFixed(2)}%`);
                console.log(`Letter grade: ${letterGrade}`);

                rl.question("Would you like to grade another set of assignments? (yes/no): ", function (answer) {
                    if (answer.trim().toLowerCase() === 'yes' || answer.trim().toLowerCase() === 'y') {
                        runProgram();
                    } else {
                        console.log("Thank you for using the grade calculator!");
                        rl.close();
                    }
                });
            }
        }

        getScore();
    });
}
runProgram();
