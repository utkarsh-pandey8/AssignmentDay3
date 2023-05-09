//enums
var dayInAWeek;
(function (dayInAWeek) {
    dayInAWeek[dayInAWeek["Monday"] = 1] = "Monday";
    dayInAWeek[dayInAWeek["Tuesday"] = 2] = "Tuesday";
    dayInAWeek[dayInAWeek["Wednesday"] = 3] = "Wednesday";
    dayInAWeek[dayInAWeek["Thursday"] = 4] = "Thursday";
    dayInAWeek[dayInAWeek["Friday"] = 5] = "Friday";
    dayInAWeek[dayInAWeek["Saturday"] = 6] = "Saturday";
    dayInAWeek[dayInAWeek["Sunday"] = 7] = "Sunday";
})(dayInAWeek || (dayInAWeek = {}));
console.log(dayInAWeek); //logs the entire enum
console.log(dayInAWeek.Wednesday); //logs the index of Wednesday, 3 in this case
console.log(dayInAWeek[5]); //logs the 5th element in the enum as it starts from index 1 here
