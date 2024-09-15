// Exercise 1:
// • Rewrite the following code block using ES6 syntax, 
// ie. const, let, arrow function, template literals and for..of

// function greeter(myArray, counter) {
//     var greetText = 'Hello ';
//     for (var index = 0; index < myArray.length; index++) {
//         console.log(greetText + myArray[index]);
//     }
// }

// greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    hello = name => console.log(`${greetText}${name}`)
    for (let name of myArray) {
        hello(name);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);