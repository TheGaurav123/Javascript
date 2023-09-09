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

// console.log(typeof null) // object
// console.log(typeof 123) // number
// console.log(typeof 123.5) // number
// console.log(typeof 123n) // bigInt
// console.log(typeof true) // boolean
// console.log(typeof "gaurav") // string
// console.log(typeof {}) // object
// console.log(typeof []) //object
// console.log(typeof function(){}) // function
// console.log(typeof undefined) // undefined
// console.log(typeof Symbol('123')) // symbol

// ************ Memory in JS ************
// Stack (Primitive)
// Heap (Non-Primitive)

// In Stack we got a copy of the value when we call it
// In Heap we got the reference of the value when we call it

// Example of Stack

// let firstName = "Akash";
// let lastName = firstName;

// lastName = 'Gaurav' // Here the value of firstName will not change as it's STACK mem and we got the copy of the value

// console.log(firstName)
// console.log(lastName);

// Example of Heap

// let obj = {
//   name: "Akash",
// };

// let newObj = obj;

// newObj.name = 'Gaurav' // Now  in this case both variables object will be affected due to the reference at same location

// console.log(obj.name)
// console.log(newObj.name)


// const name = new String('Akash')
// const name = 'Akash'  It's similar to above one 
// console.log(name.charAt(1))
// console.log(name.indexOf('h'))


const gameName = 'Super-Mario'
 
// ***Slice***
// console.log(gameName.slice(0, 4)) // Supe (String will starts from 0-3)


// ***trim***
// const gameName = '   SuperMario     '
// console.log(gameName)
// console.log(gameName.trim()) // Will trim spaces from start & end 


// ***replace***
// console.log(gameName.replace('S', 'U')) //UperMario


// ***includes***
// console.log(gameName.includes('Mario')) //true


// ***split***
// console.log(gameName.split('-')) // ['Super','Mario']

