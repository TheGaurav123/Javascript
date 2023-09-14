// ******* 1st Method Of Handling Promise (then/catch/finally) ********
// const testPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('Hey Mr.'), 4000)
//     setTimeout(()=>reject('An error message'), 4000)
// })
// testPromise.then((res)=>console.log(res)).catch(err=>console.log(err))


// ******* 2nd Method Of Handling Promise (async/await) *******
// const testPromise = new Promise((resolve, reject) => {
//   let test = false;
//   if (test) {
//     setTimeout(() => {
//       resolve("Hey Promise has been resolved !!!");
//     }, 3000);
//   } else {
//     reject("Uhoo! Unable to resolve promise");
//   }
// });

// async function handlePromise() {
//   try {
//     const result = await testPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error); 
//   }
// }
// handlePromise();


// function newFunc(age, name){
//     this.age = age
//     this.name = name
//     // return this //If we use new Keyword in instance then this line is added implicitly
// }

// const MyData = new newFunc(20, "Akash")
// const MyData2 = new newFunc(20, "Gaurav")
// console.log(MyData)