// IIFE

// *** Named IIFE ***
// (function printName() {
//   console.log("Akash Gaurav");
// })()



// *** Unnamed IIFE ***
// (function () {
//   console.log("Akash Gaurav");
// })();



// *** Two IIFEs Problem ***
// (function () {
//   console.log("Akash Gaurav");
// })()  // Gives an error just because we haven't added semicolon at the end of the IIFE hence it doesn't know where to stop

// (() => {
//   console.log("Saurav");
// })();



// *** Parameter in IIFE ***
// ((name) =>{
//   console.log(name);
// })("Akash");
