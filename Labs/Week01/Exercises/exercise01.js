// Exercise 01
// Write a JavaScript program to capitalize the first letter of each word of a given string

function capitalizeFirstLetter(sentence){
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

var example = "the quick brown fox";
var result = capitalizeFirstLetter(example)

console.log(result);