'use strict';

// Test the function with arrays of different types
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry", "date"];
const mixedArray = [true, 42, "hello", false];
const reverseArray = (taulukko) => {
    return taulukko.reverse();
};
const arrayLenght = (taulukko) => {
    return taulukko.length;
};
console.log(reverseArray(numberArray));
console.log(reverseArray(stringArray));
console.log(reverseArray(mixedArray));
console.log(arrayLenght(numberArray));
console.log(arrayLenght(stringArray));
console.log(arrayLenght(mixedArray));
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
