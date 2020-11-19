// function maxiNum(a, b, c){
//     if((a > b && a > c) || a === b){
//         return a + " is the maximum";
//     }else if((b > a && b > c) || b === c){
//         return b + " is the maximum";
//     }else if((c > b && c > a) || c === a){
//         return c + " is the maximum";
//     }
// }

function maxiNum(a, b, c){
    return ((a > b && a > c) || a === b) ? a + " is the maximum number"
        : ((b > a && b > c) || b === c) ? b + " is the maximum number"
            : ((c > b && c > a) || c === a) ? c + " is the maximum number"
                : "";
}

console.log(maxiNum(419, 219, 119));