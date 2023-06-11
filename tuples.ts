/*************** *************************/
// Tuples in Typescript
/*************************************** */
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// Type Alias
type Drink = [string, boolean, number]

const pepsi: Drink  = ['brown', true, 40];
const sprite: Drink  = ['clear', true, 40];
const tea: Drink  = ['brown',false, 0];