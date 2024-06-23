// Code for classes and inheritance in javascript
class user{
    constructor(username){
        this.username = username;
    }

    logme() {   
        console.log(`Hello ${this.username}`);
    }
}

class teacher  extends user{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }

   addSubject(){
       console.log(`${this.username} teaches ${this.subject}`); 
   }

   // static method is a method that can be called on a class itself, not on an instance of a class
   static CreateId(){
    return Math.floor(Math.random() * 1000);    
   }
}

const user = new user('mitanshu');

// user.CreateId();
// output: TypeError: user.CreateId is not a function beacuse CreateId is a static method and can be called on a class itself, not on an instance of a class
const teacher_1 = new teacher('mitanshu', 'maths');
teacher_1.addSubject();
teacher_1.logme();

console.log(teacher_1 === user);
// output: false because teacher is not equal to user
console.log(teacher_1 instanceof teacher);
// output: true because teacher_1 is an instance of teacher
// thanks to Hitesh Choudhary for the explanation of classes and inheritance in javascript 