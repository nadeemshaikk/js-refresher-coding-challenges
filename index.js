
console.log("problem 1");
function greet(name) {
    return `Hello, ${name}!`;
  }

console.log(greet("nadeem"));



console.log("problem 2");
function EvenOdd(num){
    if(num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}
console.log(EvenOdd(10));

console.log("problem 3");
function addingArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(addingArray([1, 2, 3, 4, 5]));

console.log("problem 4");
function maxNumber(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumber([1, 2, 3, 40, 5]));

console.log("problem 5");
function reverseString(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

console.log("problem 6");
function countingVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countingVowels("Hello world"))

console.log("problem 7");
function getFirstAndLast(arr) {
    if(arr.length === 0) return [];
    return [arr[0], arr[arr.length - 1]];
}
console.log(getFirstAndLast([1, 2, 3, 4, 5]));

console.log("problem 8");
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

console.log("problem 9");
function getProperty(obj, key) {
    if(obj.hasOwnProperty(key)) {
        return obj[key];
    } else {
        return undefined;
    }
}
console.log(getProperty({name: "nadeem", age: 25}, "name"));

console.log("problem 10");
function calculator(num1, num2, operator){
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero";
        }
    }
}
console.log(calculator(10, 5, '+'));
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/'));
console.log(calculator(10, 0, '/'));


function sumAll(...numbers){
    return numbers.reduce((accumulator, currentValue)=> accumulator+currentValue ,0);
}
console.log(sumAll(1, 2, 3, 4, 5)); 
console.log(sumAll(10, 20, 30));

//