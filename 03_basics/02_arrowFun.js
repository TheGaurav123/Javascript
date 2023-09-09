// let obj = {
//     name: 'Akash',
//     age: 22,
//     printName: function(){
//         // this refers to the same context
//         console.log(this.name)
//         console.log(this)
//     }
// }

// obj.printName()

// In case of Node env globally "this" keyword doesn't hold any methods in it whereas in browser this holds a "window" key under that we have multiple methods

// Note - In case of arrow function there is no support of "this"

// let obj = {
//     name:'Akash',
//     printName: ()=>{
//         console.log(this.name)
//     }
// }

// obj.printName() // undefined

// This with Function

// function checkThis(){
//     name = 'Akash'
// console.log(this.name) // undefined
// }

// checkThis()

// this doesn't have any mean in function it only mean in objects



// ***Implicit Return***
// const printName = (name) => name
// console.log(printName('Akash')) // Akash


// ***Explicit Return***
// const printName = (name) =>{
//     return name
// }
// console.log(printName('Akash')) // Akash