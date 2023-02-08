//revarse weay te counts
function sum(number){
    if(number == 1){
        return 1;
    }
    return number + sum(number-1); //recurtion function
}
const result = sum(10)
console.log('Total sum number is:',result);