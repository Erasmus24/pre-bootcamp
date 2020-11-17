function maximum(a, b, c){
    if((a > b && a > c) || a === b){
        return a + " is the maximum";
    }else if((b > a && b > c) || b === c){
        return b + " is the maximum";
    }else if((c > b && c > a) || c === a){
        return c + " is the maximum";
    }
}

console.log(maximum(19, 19, 19));