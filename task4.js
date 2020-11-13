function twoNumbers(a, b){
    var n = a + b;
    if((a === 3 || b === 3) && (a + b == n.toString().includes("3"))){
        return "true";
    } else {
        return "false"
    }
}

console.log(twoNumbers(3, 10));