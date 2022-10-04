//Reduce

const r1 = [1,22,3];
let total = r1.reduce((acc, val)=>{return acc + val;}, 0);
// let largest = r1.reduce((acc, val)=> {
//     if(acc > val){
//         return acc}
//         else {
//             return val;}
//         }, r1[0]);


//TERNERY IS BETTER HERE
// let largest = r1.reduce((acc, val)=> acc > val ? acc : val, r1[0]);

let largest = r1.reduce((acc, val)=>{return Math.max(acc, val);});
console.log(total);
console.log(largest);

//FILTER & LAMBDA
//Q1)Give all numbers under 10

const num = [1, 3, 6, 3, 33, 21, 34, 8];
let numsUnderTen = num.filter(w => w < 10);   //LAMDA EXPRESSION
console.log(numsUnderTen);

const words = ["Murat", "Sumeyra", "Ibrahim", "Fahreddin"];
let wordGreterSeven = words.filter(word => word.length > 7);
console.log("wordGreterSeven:\t" + wordGreterSeven);