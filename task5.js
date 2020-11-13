function areaTriangle(a, b, c){
    var s = 0.5 * (a + b + c);
    var area = Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c))); //Rounding off the answer to the nearest number
    return area + " square units (Rounded off to the nearest number)";
}

console.log(areaTriangle(6, 3, 8));