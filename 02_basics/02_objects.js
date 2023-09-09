const symBol = Symbol('123')


const myObj = {
    [symBol]: '321',
    name: 'Akash',
    "Last Name": 'Gaurav'
}

// console.log(myObj['Last Name'])  // Gaurav
// console.log(myObj[symBol]) // 321
// console.log(myObj['name']) // Akash


// If we want to lock the obj
// Object.freeze(myObj)
// myObj['Last Name'] = 'Kumar' // Won't work as freezed
// console.log(myObj)


// myObj.greeting = () =>{
//     console.log('Good Morning !!!')
// }
// console.log(myObj.greeting())

// myObj.greetingWithVar = function(){
//     console.log(`Good Morning ${this.name}`)
// }
// console.log(myObj.greetingWithVar()) // Good Morning Akash

// myObj.greetingWithVar = () => {
//         console.log(`Good Morning ${this.name}`)
//     }
// console.log(myObj.greetingWithVar()) // Good Morning undefined