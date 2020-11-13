function celsiusToFahrenhiet(celsius){
    let fahrenhiet = (celsius * 1.8) + 32; // Converting celsius into fahrenhiet
    return fahrenhiet + " degrees Fahrenhiet";
}

function fahrenhietToCelsius(fahrenhiet){
    let celsius = (fahrenhiet / 1.8) - 32; // Converting fahrenhiet into celsius
    return celsius + " degrees Celsius";
}

console.log(celsiusToFahrenhiet(1));
console.log(fahrenhietToCelsius(61));