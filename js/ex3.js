// Processing:  
// Use functional programming.  Use filter, map, reduce, and pure functions.
// Hint: See tutorial, "Student Results"
// Output:  An array of student objects with the shown properties.  Shows students whose last name begins with "C": First and Last name; Min, Max, and Average Score

//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functions and map a new array of objects
const beginC = studentList => studentList.filter(student => student.lastName[0] == "C");
const students = beginC(studentList);


const cLastNameResults= []

for (var i = 0; i < students.length; ++i) {
    const scores = students[i].scores;
    const avg = scores.reduce((acc, value) => acc + value / scores.length, 0);

    cLastNameResults[i] = {
        firstName: students[i].firstName,
        lastName: students[i].lastName,
        minScore: Math.min.apply(Math, students[i].scores),
        maxScore: Math.max.apply(Math, students[i].scores),
        avgScore: avg
    } 

  }


//Output
console.log(cLastNameResults);
