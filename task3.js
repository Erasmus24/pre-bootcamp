// function twoNum(a, b){
//     if(a === 65 || b === 65){
//         return "true";
//     }else if(a + b === 65){
//         return "true";
//     }else {
//         return "false";
//     }
// }

function twoNum(a, b){
    return (a === 65 || b === 65) ? "true"
        : (a + b === 65) ? "true"
            : "false"
}

console.log((twoNum(15, 50)));