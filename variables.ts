/********************************************************************** */
//             Type annotations in Typescript
// Type Annotations are annotations which can be placed anywhere when we use a type. The use of Type annotation is not mandatory in TypeScript. It helps the compiler in checking the types of variable and avoid errors when dealing with the data types.
// We can specify the type by using a colon(: Type) after a variable name, parameter, or property. There can be a space between the colon and variable name, parameter, or property. TypeScript includes all the primitive data types of JavaScript such as number, string, Boolean, etc.
/********************************************************************** */

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

// Classes

class Car {

}

let myCar1: Car = new Car();

// Object literal

let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Function

const logNumber:(i: number) => void = (i: number) => {
    console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const cooridnates: { x: number; y:number } = JSON.parse(json);

console.log(cooridnates);

// 2) When we declare a variable on one line then initialize it later

let words = ['red', 'green', 'blue']
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
    if(words[i] === 'green'){
        foundWord = true;
    }
}

// 3) When we want a variable to have a type that can't be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}



/********************************************************************** */
//             Type inference in Typescript
// In TypeScript, it is not necessary to annotate type always. The TypeScript compiler infers the type information when there is no explicit information available in the form of type annotations.

// In TypeScript, TypeScript compiler infers the type information when:

// Variables and members are initialized
// Setting default values for parameters
// Determined function return types
/********************************************************************** */