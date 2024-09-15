// Exercise 4:
// • Using array.proto.filter create a function that will filter out 
// all the values of the array that are less than twenty.

var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(val=>val<20);

console.log(filterLessThan20)