const sameChar = (str1, str2) => {
  let newArray = [];
  const obj = str2.split("");
  for (str of str1) {
    let indx = obj.findIndex((s) => s === str);
    if (indx >= 0) {
      newArray.push(obj[indx]);
    }
  }
  return newArray.toString();
};

console.log(sameChar("house", "computers"));
console.log(sameChar("fine", "blink"));
