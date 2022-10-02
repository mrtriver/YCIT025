function increaseValue(a) {
  return a + 100;
}
const incVal = (a) => a + 100;

const sumValues = (a, b) => a + b; //Notice there is no return

const canVote = (a) => {
  if (a > 18) return "Eligible";
  else return "no";
};
console.log(sumValues(3, 5));
console.log(incVal(4));
console.log(canVote(11));
console.log(increaseValue(3));
