function sameChar(a, b){
    a = a.toLowerCase().split('');
    b = b.toLowerCase().split('');
    //console.log(a)
    for(i = 0; i < a.length; i++){
        for(j = 0; j < b.length; j++)
        if(b.includes(a[i])){
            console.log(a[i])          
        }        
    }    
}

sameChar('milk', 'slime');
sameChar('fine', 'blink');
