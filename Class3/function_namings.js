const add = (n1,n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2 ) => n1 / n2;

function calculate (n1, n2, f) 
{
    return f(n1, n2);

}


console.log(calculate (2,4, add));
console.log(calculate(2,4, (n1, n2)=> n1-n2)); //another way. Anonomous function