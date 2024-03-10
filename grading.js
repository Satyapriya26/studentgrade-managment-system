// Function to calculate grade based on marks
function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Example usage
const mathMarks = 85;
const scienceMarks = 75;
const historyMarks = 60;

const mathGrade = calculateGrade(mathMarks);
const scienceGrade = calculateGrade(scienceMarks);
const historyGrade = calculateGrade(historyMarks);

console.log('Math Grade:', mathGrade);
console.log('Science Grade:', scienceGrade);
console.log('History Grade:', historyGrade);
