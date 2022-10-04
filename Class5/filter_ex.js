let examGrades = [
    { courseNumber: 1, grade: 78 },
    { courseNumber: 2, grade: 94 },
    { courseNumber: 3, grade: 45 },
    { courseNumber: 4, grade: 59 }
];

let passingGrades= examGrades.filter(g => g.grade > 60); 



function passingGradesFunction(value)
{
    return value > 60;
}
let passingGrades2 = examGrades.filter(passingGradesFunction());


console.log(passingGrades);
console.log(passingGrades2);