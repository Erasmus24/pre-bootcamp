function timer(number){
    let hrs = Math.floor(number / 60); //Used Math.floor() to isolate the hour number by removing decimals
    let mins = number % 60; //Used the % to obtain the remainder and converted it into minutes by using 60
    return (hrs <= 1) ?     // If it's only 1 hour we can't use a plural
    hrs + " Hour, " + mins + " Minutes" : 
    hrs + " Hours, " + mins + " Minutes" 

}
// return (hrs <= 1) ? hrs + " Hour, " + mins + " Minutes" : hrs + " Hours, " + mins + " Minutes"

console.log(timer(71));
console.log(timer(133));
console.log(timer(456));