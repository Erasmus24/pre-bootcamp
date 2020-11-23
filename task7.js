function celsiusToFahrenhiet(celsius) {
  let fahrenhiet = celsius * 1.8 + 32;
  return fahrenhiet + " degrees Fahrenhiet";
}

function fahrenhietToCelsius(fahrenhiet) {
  let celsius = (fahrenhiet - 32) * 1.8;
  return celsius + " degrees Celsius";
}

console.log(celsiusToFahrenhiet(1));
console.log(fahrenhietToCelsius(61));
