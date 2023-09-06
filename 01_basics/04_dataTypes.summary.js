/*
    Categorization of data is based on the "store" & "access"
    of the data in/from memory

    Data Type :- Primitive 
                 Non-Primitive
*/

// Primitive
/* 
    String,
    Number,
    BIGInt,
    Boolean,
    Symbol,
    null,
    undefined 
 */

// Non Primitive
/*
    Array,
    Object,
    Function
*/

// Symbol - Symbols are used for containing same value but still be a different

// const newId = Symbol("123");
// const anotherNewId = Symbol("123");

// console.log(newId === anotherNewId); // false

// const bigInt = 2323233323332323232n // n represents bigInt

// console.log(typeof bigInt) // bigInt


// Summary

console.log(typeof null) // object
console.log(typeof 123) // number
console.log(typeof 123.5) // number
console.log(typeof 123n) // bigInt
console.log(typeof true) // boolean
console.log(typeof "gaurav") // string
console.log(typeof {}) // object
console.log(typeof []) //object
console.log(typeof function(){}) // function
console.log(typeof undefined) // undefined
console.log(typeof Symbol('123')) // symbol