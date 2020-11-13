function twoNumbers(a, b){
    var num = a + b;
    var sum = num.toString();
    if((a === 3 || b === 3) && (sum.includes("3"))){
        return "true";
    }else {
        return "false";
    }
}

console.log(twoNumbers(50, 3));