function naturalNumbers(){
    let sum = 0;
    for(j = 0; j < 1000; j++){ //To iterate the numbers from 0 to 999
        if(j % 3 === 0 || j % 5 === 0){ //To take out only the multiples of 3 or 5
            sum += j;                   //To add all the multiples of 3 or 5 together
        } 
    }
    return sum;
}

console.log(naturalNumbers());