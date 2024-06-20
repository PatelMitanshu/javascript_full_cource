const user ={
    username: 'mitanshu',
    loginCount: 8,
    signedIn: true,

    getUserName: function(){
        // in this function, directly console.log() username will not work because it is not a global variable but we can access it using this keyword or object name
        // this is a reference to current context
        // console.log(`Hello, ${username}`);
        console.log(`Hello, ${this.username}`);
    },
}
console.log(user.getUserName());
// console.log() this in global context in node enviroment retruns empty object but in browser it returns window object
console.log(this);


function user1(userName, loginCount, signedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    }
    
// const UserOne=user('mitanshu', 8, true);
// const UserTwo=user('smit', 6, false);
// console.log(UserOne);
// output: smit, 6, false because UserTwo is overwriting UserOne
// in oboue code problem solved by using new keyword which creates a new object and assigns it to UserOne and UserTwo
// step 1: new keyword creates an empty object
// step 2: it pass this object to the constructor function
// step 3: it assigns the value of this object to the variable
// step 4 : it returns the object
const UserOne= new user1('mitanshu', 8, true);
const UserTwo= new user1('smit', 6, false);
// constructor is refrence to the fuction that created the object
console.log(UserOne.constructor);
console.log(UserOne);
// output: mitanshu, 8, true

// instanceof operator checks if the object is created from the constructor function or not  returns true or false
console.log(userOne instanceof user1);

// thank you to hitesh chaudhary for this amazing explanation