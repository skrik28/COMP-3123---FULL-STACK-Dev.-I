// Exercise 5:
// • Using array.proto.reduce create calculate the sum and product of a given array.

var array = [1, 2 ,3 ,4]

const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum)
console.log(calculateProduct)