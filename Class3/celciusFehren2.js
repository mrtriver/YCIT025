function convertTemp(value, unit) {
  let tempResult = 0.0;

  switch (unit) {
    case "C":
      return (9 / 5) * value + 32;
      break;

    case "F":
      return (5 / 9) * (value - 32);
      break;
  }
  return tempResult;
}

console.log(convertTemp(3, "C"));
