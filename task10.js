function vowels(str){
    var string = '';
    str = str.toLowerCase().split("");//To seperate the letters of the string and convert all to lowercase.
    for(j = 0; j <= str.length; j++){   //Iterate through each letter 
       switch(str[j]){              //If letter macthes than add to the string variable
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