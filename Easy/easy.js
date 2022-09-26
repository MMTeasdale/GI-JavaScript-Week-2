var attendanceSheet = [
    ["Taz", "Devil", 5],
    ["Bugs", "Bunny", 6],
    ["Harley", "Quinn", 7],
];

function getStudent(attendanceSheet, index) {
    var student = attendanceSheet[index];
    return `I'm ${student[0]} ${student[1]} and I'm ${student[2]} years old`;
}

console.log(getStudent(attendanceSheet, [1]));