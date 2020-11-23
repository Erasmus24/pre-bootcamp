function areaTriangle(a, b, c) {
  var s = 0.5 * (a + b + c);
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2); 
  return area + " square units (Rounded off to the nearest number)";
}

console.log(areaTriangle(6, 6, 9));
