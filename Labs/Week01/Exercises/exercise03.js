// Exercise 03
// Write a JavaScript program to move the last three characters to the start of a given string.
// The string length must be greater or equal to three.

function moveLastThreeCharsToStart(str) {
    if (str.length < 3) {
        return str;
    }

    const lastThree = str.slice(-3);
    
    const rest = str.slice(0, -3);
    
    return lastThree + rest;
}


var input = "JavaScript";
var result = moveLastThreeCharsToStart(input);

console.log(result);