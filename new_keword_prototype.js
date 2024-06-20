function multipltby5(x) {
  return x * 5;
}
// function is a object in javascript  so we can add properties to it like below
multipltby5.power = 5;

console.log(multipltby5(5));
console.log(multipltby5.power);
console.log(multipltby5.prototype);

function createuser(username,score){
    this.username=username;
    this.score=score;
}

createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.printscore=function(){
    console.log(`${this.username} has a score of ${this.score}`)
}

// below code will not work because not use new keyword when ever defind a prototype it  is stored in memory but when  ever we can tranfer in to variable not use new keyword not stored in user1 but use new keyword it is stored in user1 and we can access all the properties of user1
// const user1=createuser('mitanshu', 5);
// const user2=createuser('smit', 6);

const user1=new createuser('mitanshu', 5);
const user2=new createuser('smit', 6);
user1.printscore();


let myHero = ["thor","spiderman"];

let heroPower = {
    thor: "Thunder",
    spiderman: "Web",

    getSpidermanPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
       }
}

// in oboue code we can create a list and object 
// we can add a property to the object and list because in javascript array string  and function are pass in object so we can add a property to it add all the object and list are pass in object so we can add a property to it 
Object.prototype.mitanshu = function(){
    console.log("mitanshu is present in the all object");
}
heroPower.mitanshu();
myHero.mitanshu();

// in below code we can add a property to the array because array is pass in object so we can add a property to it this is access in all the array not in string and object
Array.prototype.Heymitanshu = function(){
    console.log("mitanshu is present in the array");
}

myHero.Heymitanshu()

const user={
    name: 'mitanshu',
    email:'mitanshu@google.com'
}

const Teacher ={
    makevideo: true
}

const TeachingSupport={
    isAvailable : false
}

const TASupport={
    makeAssignment: 'Js Assignment',
    fullTime: true,
    // we can add a TeachingSupport using __proto__ property after add a TeachingSupport we can access all the properties of TeachingSupport bot this is not a good practice
    __proto__: TeachingSupport
}

// we can add a user in Teacher using __proto__ property after add a user we can access all the properties of user bot this is not a good practice
Teacher.__proto__=user;


// moder syntax to add a prototype
Object.setPrototypeOf(Teacher,user);

let userString = "mitanshu       ";
// we can add a trueLength Method to the string using prototype
String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}

userString.trueLength();
"hitesh    ".trueLength();


// thank you to Hitesh Choudhary for this tutorial