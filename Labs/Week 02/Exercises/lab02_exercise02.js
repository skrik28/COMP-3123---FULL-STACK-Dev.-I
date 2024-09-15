// Exercise 2:
// • Using destructuring assignment syntax and the spread operator, 
// write a function will capitalize the first letter of a string.

const capitalizeFirstLetter = ([l1,...rest]) =>l1.toUpperCase() + rest.join("");
console.log(capitalizeFirstLetter("hello"));