// var name = 'Akash'

// if(true){
//     // var name = 'Saurav'
//     // console.log(name) // Saurav
// }
// console.log(name) // Saurav

// *** Note - If we use "var" to declare a variable then it stored in Global Scope hence it can be changed anywhere in the code


let name = 'Gaurav'

// if(true){
    // let name = 'Akash Gaurav'
    // console.log(name) // Akash Gaurav
// }

// console.log(name) // Gaurav

// *** Note - This happened because "let" has block scope and that's why it can't be accessible "outside or inside" of any scope
// Note :- In simple terms "let" can't be accessed "outside" of the scope

// if(true){
//     let age = 20
//     if(true){
//         if(true){
//             console.log(age)
//         }
//     }
// }