// function maximum(a, b, c){
//     if((a > b && a > c) || a === b){
//         return a + " is the maximum";
//     }else if((b > a && b > c) || b === c){
//         return b + " is the maximum";
//     }else if((c > b && c > a) || c === a){
//         return c + " is the maximum";
//     }
// }

function maximum(a, b, c){
    return ((a > b && a > c) || a === b) ? a + " is the maximum"
        : ((b > a && b > c) || b === c) ? b + " is the maximum"
            : ((c > b && c > a) || c === a) ? c + " is the maximum"
                : ""
}

console.log(maximum(419, 219, 219));