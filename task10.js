function vowels(str) {
  var string = "";
  str = str.toLowerCase().split("");
  for (j = 0; j <= str.length; j++) {
    switch (str[j]) {
      case "a":
        string += " a";
        break;
      case "e":
        string += " e";
        break;
      case "i":
        string += " i";
        break;
      case "o":
        string += " o";
        break;
      case "u":
        string += " u";
        break;
    }
  }
  return string;
}

console.log(vowels("ERASMUS IS AWESOME !"));
console.log(vowels("Umuzi Is The Best"));
console.log(vowels("rhyme"));
