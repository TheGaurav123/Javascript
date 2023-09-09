// const num1 = 123.92213
// const num2 = new Number(123)

// console.log(num1)
// console.log(num2) // [Number: 123] as we are explicitly defining the variable as Number


// ***toString()***
// console.log(num1.toString()) //Number will be converted to String
// console.log(num1.toString().length) // 3


// ***toFixed()***
// console.log(num1.toFixed(2)) // 123.12 


// ***toPrecision()***
// console.log(num1.toPrecision(3)) // 124 (Rounded off the value to 3 Precision before decimal)


// ***toLocaleString()***
// const num3 = 10000000
// console.log(num3.toLocaleString()) // 10,000,000
// console.log(num3.toLocaleString('en-IN')) // 1,00,00,000



// ********************* Math *********************
// console.log(Math.abs(-3)) // 3
// console.log(Math.round(4.5)) // 5
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.2)) // 4
// console.log(Math.min(4,3,6,8)) // 3
// console.log(Math.max(4,3,6,8)) // 8
// console.log(Math.random()) // Gives random values b/w 0 & 1
// console.log(Math.floor(Math.random()*10)) // Gives random values b/w 0 & 10

// const min = 10
// const max = 20

// console.log(Math.round(Math.random() * (max - min) + min))
