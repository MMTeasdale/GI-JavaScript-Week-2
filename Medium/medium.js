function getMonthName(num){
    var monthIndex = num - 1;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
    return months[monthIndex];
}

console.log(getMonthName(3));