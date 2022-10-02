let a = 10;

function calculate()
{
   let a = 20;
}

calculate();
console.log(a);

let x = new function ("a", "b", "return a + b ;")
console.log (x(1,2));