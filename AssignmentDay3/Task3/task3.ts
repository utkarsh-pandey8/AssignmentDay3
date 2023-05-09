//enums

enum dayInAWeek{
    Monday = 1,     //setting the initial index to 1
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(dayInAWeek) //logs the entire enum
console.log(dayInAWeek.Wednesday)   //logs the index of Wednesday, 3 in this case
console.log(dayInAWeek[5])  //logs the 5th element in the enum as it starts from index 1 here