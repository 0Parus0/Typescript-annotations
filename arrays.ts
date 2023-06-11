// An array which only contains strings doesn't need to be annotated
const carMakers = ['ford', 'toyota', 'honda'];

// An array which contains only strings but only initialized as empty array 

// const carMakers: string[] = [];

// An array which only contains date objects also doesn't need to be annotated

const dates = [new Date(), new Date()];

// An array which contains arrays

const emptyCarsByMake: string[][] = [];

const carsByMake = [
    ['f150']
    ['corolla']
    ['civic']
]

// TS can do type inference when extracting values from an array
const car = carMakers[0];
const myCar = carMakers.pop();

// TS can prevent us from adding incompatible values to the array

// carMakers.push(100); this will be an error type number incompatible with type string

// We can get help with 'map', 'forEach', 'reduce' functions

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// Flexible - arrays can still contain multiple different types

const importantDates: (Date | string)[] = [new Date()]

importantDates.push('10-10-2030');
importantDates.push(new Date());

