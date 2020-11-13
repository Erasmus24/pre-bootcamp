// function twoNumbers(a, b){
//     var num = a + b;
//     var sum = num.toString();
//     if((a === 3 || b === 3) && (sum.includes("3"))){
//         return "true";
//     }else {
//         return "false";
//     }
// }

function twoNumbers(a, b){
    var sum = a + b;
    var sumString = sum.toString(); //Changing the number to a string
    return ((a === 3 || b === 3) && (sumString.includes("3"))) ? "true" : "false"
}

console.log(twoNumbers(3, 1000));