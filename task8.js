function timer(number) {
  let hrs = Math.floor(number / 60);
  let mins = number % 60;
  return hrs <= 1
    ? hrs + " Hour, " + mins + " Minutes"
    : hrs + " Hours, " + mins + " Minutes";
}

console.log(timer(71));
console.log(timer(133));
console.log(timer(456));
