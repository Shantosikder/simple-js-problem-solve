//factional
function fact(number){
    if(number == 1){
        return 1;
    }
    return number * fact(number - 1); //recurtion function
}
const result = fact(6);
console.log('Factrial number:',result);