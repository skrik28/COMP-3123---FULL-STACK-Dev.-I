// Exercise 3:
// • Using array.proto.map create function to use the capitalize method in Exercise 2 
// to upper case the first character of each Color in the following array..

const capitalizeFirstLetter = ([l1,...rest]) =>l1.toUpperCase() + rest.join("");

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalizeFirstLetter(color));


console.log(capitalizedColors);