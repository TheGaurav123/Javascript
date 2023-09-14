/*
"forEach" - forEach is a function or we can say that it is a type of higher order function
          as it takes function as an argument that loops over an array;
*/

// const arr = [1, 2, 3, 4];
// arr.forEach((val) => console.log(`Hello ${val}`));



// Filteration of array using forEach
// arr.forEach((val) => val < 2 && console.log(val));



// Summation of array's element
// let sum = 0
// arr.forEach((val) => sum+= val);
// console.log(sum)



// Filteration of array for string
// const arr = [1, 2, "3", 4];
// arr.forEach(val=> typeof(val) !== 'string' && console.log(val))



// Custom Function to check whether an argument is an array or not
// function is_array(arr){
//     // if(Array.isArray(arr)){
//     //     return 'Argument is an array'
//     // }
//     // else{
//     //     return 'Please pass an array'
//     // }

//     if(arr instanceof Array){
//         return 'Argument is an array'
//     }
//     else{
//         return 'Please pass an array'
//     }
// }



// Function to clone an array
// function cloneArray(arr) {
//   let newArr = [...arr];
//   return newArr;

// Here we can't do something like newArr = arr as it will reference to the same array
// so it will not be feasible solution as it affects the original array
// }




// funtion to get the elements of an array based on argument
// function getArray(arr, steps=1) {
//   let returnedArr = [];

//     if (arr.length === 0) {
//       return arr;
//     } else {
//       for (let i = 0; i < arr.length && i < steps; i++) {
//         returnedArr.push(arr[i]);
//       }
//       return returnedArr;
//     }

// }



// Function to join the strings with seperated commas
// function joinString(stringArray){
//     // let outputString = `"${String([...stringArray])}"`
//     // return outputString
//                     // or
//     // return stringArray.join('+')
// }

// console.log(joinString(['Red','Green', 'White']))



// Possible ways to create an object
// const obj1 = {name:'Akash'} // Object Literal
// const obj2 = new Object({name:'Akash'}) 
// const obj3 = Object.create({});obj3.name = 'Akash'
// const obj4 = new obj('Akash')

// function obj(name){  // function constructor
//     this.name = name
// }
// class objUsingClass{
//     constructor(name){
//         this.name = name
//     }
//     getName(){
//         return this
//     }
// }

// const obj5 = new objUsingClass('Akash').getName()




// Higher Order Function - Function that takes function as an argument or return a function from it
// function printAfter5(name){
//     return function(){
//         setTimeout(() => {
//             console.log(name)
//         }, 5000);
//     }
// }

// function printName(nameFn){
//     nameFn()
// }



// Var - var are function scoped 
// Let - let are braces scoped




// Call - call is used to associate the context to a function or method
// function checkThis(){
//     console.log(this)
// }

// checkThis.call() // {.....} object having some node predefined methods or variables
// checkThis.call({name: 'Akash'}) // {name:'Akash'} Now object only have the {name:'Akash'}




// Apply - apply is same as call but it's used for passing the arguments in the function
// function checkApply(param1, param2){
//     console.log(this, param1, param2)
// }

// checkApply.apply({name: 'Akash'},[1,2])




// Bind - bind is similar to call but it's donot call the function immediately rather returns a function with the context(this) attached to it 





// To Learn (***IMPORTANT***)
/*
    1. Array
    2. Loops
    3. Linked List
    4. Strings
    5. Stack
    6. Queues
    7. Tree
    8. Graph
 */
