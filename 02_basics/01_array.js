const myArr = [1,2,3,4,5]

// *** Push ***
// myArr.push(2)
// console.log(myArr) // [1,2,3,4,5,2]


// *** Pop ***
// myArr.pop()
// console.log(myArr) // [1,2,3,4,5]


// *** UnShift ***
// myArr.unshift(23)
// console.log(myArr) // [23,1,2,3,4,5]


// *** Shift ***
// myArr.shift()
// console.log(myArr) // [2,3,4,5] 


// *** includes ***
// console.log(myArr.includes(2)) // true


// *** indexOf *** 
// console.log(myArr.indexOf(2)) // 1
// console.log(myArr.indexOf(20)) // -1 (returns -1 if value not found)


// *** join *** (Converts array into string)
// const myNewArr = myArr.join()
// console.log(typeof myNewArr)
// console.log(typeof myArr)


// *** Slice & Splice ***

// console.log(myArr.slice(0,3)) // [1,2,3]
// console.log(myArr) // [1,2,3,4,5]

// In Splice the original value gets affected (Shallow Copy)
// console.log(myArr.splice(0,3)) // [1,2,3]
// console.log(myArr) // [4,5] (Original Value are removed due to splice)



// *** Flat *** (Used to spread the recursive arrays)
// const recursiveArr = [1,2,3,[4,5,6,[7,8,9]]]
// console.log(recursiveArr.flat(Infinity)) // [1,2,3,4,5,6,7,8,9]


// *** Array.from() *** (Converts anything to array)
// console.log(Array.from('Gaurav')) // ['G', 'a', 'u', 'r', 'a', 'v']
// console.log(Array.from({name:'Gaurav'})) // []
