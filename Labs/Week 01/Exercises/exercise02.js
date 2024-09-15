// Exercise 02
// Write a JavaScript program to find the largest of three given integers.

function findLargestNumber(numbers) {
    return Math.max(...numbers);
}

var numbers = [5, 12, 7, 21, 1];
var largest = findLargestNumber(numbers);

console.log(largest);