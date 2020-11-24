function twoNumbers(a, b) {
  var sum = a + b;
  var sumString = sum.toString();
  return (a === 3 || b === 3) && sumString.includes("3") ? true : false;
}

console.log(twoNumbers(4, 3));
