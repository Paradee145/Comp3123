//Paradee101374958_comp3123-xec02
//ES6 Practice Exercises
//Developer Note:
//Try to solve the problems without using search engines or stack overflow for the solutions.
//Exercise 1:·
//Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of
//function gretter (myArray, counter) {
//var greetText = 'Hello ';
//for (var index = 0; index < myArray.length; index++) { console.log(greetText + myArray[index]);}
//gretter (['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


const gretter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const name of myArray) {
      console.log(`${greetText}${name}`);
    }
  };
  
  gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

 // Exercise 2:•
//Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.
//console.log(capitalize('fooBar'));
//console.log(capitalize('nodeJs'));
// Output
//Foobar
//Nodejs

const capitalize = (str) => {
    // Destructure the string into the first letter and the rest
    const [firstLetter, ...rest] = str;
    // Capitalize the first letter and concatenate it with the rest of the string
    return `${firstLetter.toUpperCase()}${rest.join('')}`;
  };
  
  console.log(capitalize('fooBar')); // Output: FooBar
  console.log(capitalize('nodeJs')); // Output: NodeJs

 // Exercise 3:
//Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..
//const colors = ['red', 'green', 'blue']
// code...
//console.log(capitalizedColors)
// Output
//['Red', 'Green', 'Blue']
  

const capitalize = (str) => {
    const [firstLetter, ...rest] = str;
    return `${firstLetter.toUpperCase()}${rest.join('')}`;
  };
  
  const colors = ['red', 'green', 'blue'];
  
  const capitalizedColors = colors.map(capitalize);
  
  console.log(capitalizedColors); // Output: ['Red', 'Green', 'Blue']

  
  //Exercise 4:
//Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.
//var values =
// Code...
//[1, 60, 34, 30, 20, 5]
//console.log(filterLess Than20)
// Output
// [1, 5]


const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20); // Output: [1, 5]

//Exercise 5:
//• Using array.proto.reduce create calculate the sum and product of a given array.
//var array = [1, 2, 3, 4]
// Code ..
//console.log(calculateSum);
//console.log(calculateProduct);
// Output
//10
//24




var array = [1, 2, 3, 4];

// Calculate the sum
var calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the product
var calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);    // Output: 10
console.log(calculateProduct); // Output: 24
