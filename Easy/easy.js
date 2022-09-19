var attendanceSheet = [
    ["John", "Doe", 5],
    ["Laura", "Love", 6],
    ["Buck", "Hunter", 7],
];

function getStudent(attendanceSheet, index) {
    var student = attendanceSheet[index];
    return `I'm ${student[0]} ${student[1]} and I'm ${student[2]} years old`;
}

console.log(getStudent(attendanceSheet, [1]));