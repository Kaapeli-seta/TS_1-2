export {};
// define the type(s) for 'value'
function lengthOrSquare<T>(value: T) {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === 'number'){
        console.log(Math.sqrt(value))
    } else if (typeof value === 'string') {
        console.log(value.length)
    }
    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
    return value;
}

// Prompt the user to enter a value as either a string or a number
const userInput = prompt('nter number or sting');
const parsedValue =  Number(userInput) ? Number(userInput) : userInput;


// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);

