// GPA CALCULATION


//The grade point value per letter grade
const A_PLUS = 4.3;
const A = 4.0
const A_MINUS =3.7;
const B_PLUS = 3.3
const B = 3.0;
const B_MINUS = 2.7;
const C = 2.0;
const F = 0;

//Courses with their credits
const COURSE1_CREDIT = 4.00;
const COURSE2_CREDIT = 4.00;
const COURSE3_CREDIT = 4.00;
const COURSE4_CREDIT = 4.00;
 let qualityPoints_Course1 = 1;
 let qualityPoints_Course2 = 1;
 let qualityPoints_Course3 = 1;
 let qualityPoints_Course4 = 1;


//Some variables needed to calculate GPA


let total_Credits_For_Term =0;
let total_Quality_Points_For_Term = 0;
let gPA =1;
let name_Student = "";

function gPA_Calculation(name_Student, course1_Letter_Grade, course2_Letter_Grade, course3_Letter_Grade,course4_Letter_Grade)
{
//1-)For each course, multiply the letter grade value by the number of credits. This value is the
//"quality points".
qualityPoints_Course1 = course1_Letter_Grade * COURSE1_CREDIT;
qualityPoints_Course2 = course2_Letter_Grade * COURSE2_CREDIT;
qualityPoints_Course3 = course3_Letter_Grade * COURSE3_CREDIT;
qualityPoints_Course4 = course4_Letter_Grade * COURSE4_CREDIT;

console.log ("Quality Point Course1 = ", qualityPoints_Course1);
console.log ("Quality Point Course2 = ", qualityPoints_Course2);
console.log ("Quality Point Course3 = ", qualityPoints_Course3);
console.log ("Quality Point Course4 = ", qualityPoints_Course4);

//2. Total the credits for the term
total_Credits_For_Term = COURSE1_CREDIT + COURSE2_CREDIT + COURSE3_CREDIT + COURSE4_CREDIT;

console.log("Total Credits For Term = "+total_Credits_For_Term);

//3. Total the quality points for the term

total_Quality_Points_For_Term = qualityPoints_Course1 + qualityPoints_Course2 + qualityPoints_Course3 + qualityPoints_Course4;
console.log("Total Quality Pt Term = "+total_Quality_Points_For_Term);

//4. Divide the amount of quality points by the total credits. This is GPA

gPA = total_Quality_Points_For_Term / total_Credits_For_Term;


return "GPA for  "+ name_Student + gPA;

}

console.log(gPA_Calculation("James Doe\t", A_PLUS, B_PLUS, A, F));



//THE BETTER SOLUTION GIVEN BELOW
// const CREDIT = 4;
// //let totalQuality = 0;

// let courseQualityValue = (grade) => gradePointValue[grade] * CREDIT;

// const gradePointValue = {
//     "A+": 4.3,
//     "A": 4.0,
//     "A-": 3.7,
//     "B+": 3.3,
//     "B": 3.0,
//     "B-": 2.7,
//     "C": 2.0,
//     "F": 0,
// };

// let courses = [
//     { courseNumber: 1, letterGrade: "A+" },
//     { courseNumber: 2, letterGrade: "B+" },
//     { courseNumber: 3, letterGrade: "A" },
//     { courseNumber: 4, letterGrade: "F" }
// ];

// for (let c of courses)
// {
//     c["quality"] = courseQualityValue(c["letterGrade"]);
//     console.log(`Quality of course ${c.courseNumber} is ${c.quality}.`);
//     //totalQuality += c.quality;
// }

// // ............

// // total of qualities of all the objects in courses
// let qualityTotal = courses.reduce((accumulator, object) => { return accumulator + object.quality; }, 0);

// console.log(qualityTotal);

// let totalCredit = CREDIT * courses.length;

// console.log(`The total credits possible are ${totalCredit}.`);

// let GPA = qualityTotal / totalCredit;

// console.log("GPA = " + GPA.toFixed(1));
