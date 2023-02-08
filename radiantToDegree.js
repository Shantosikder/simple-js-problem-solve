//Radiant to degrees
function radiantToDegre(radiant){
    if(typeof radiant != "number"){
        return "provide valid number";
    }
    const PI = 3.14159265359;
    const degre =(radiant*(180/PI)).toFixed(2);
    return degre;
}
const result = radiantToDegre(10);
console.log(result);