//  Keyword "new" is known as constructor function (Used to create a new instance)

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greet = function(){
    console.log(`Hello ${this.username}`)
  }

//   return this; // "return this" is implicitly defined here
}

// const userOne = User('Akash', 2, true)
// const userTwo = User('Gaurav', 13, false) // Here it will overwrite the User as wern't using "new"

// ****** Solution ******
// const userOne = new User("Akash", 2, true);
// const userTwo = new User("Gaurav", 13, false); // Now no overwrite



// const userThree = new User('Akash Gaurav', 22, true)
// console.log(userThree.constructor) // Here constructor is reference to it's own function
// console.log(userTwo instanceof User) // this will return whether the instance is the instance of same constructor fn.



