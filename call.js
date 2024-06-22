function SetUsername(username){
    this.username = username;
}

// function CreateUser(username,email,password){
//     SetUsername.call(username); 
//     this.email = email;
//     this.password = password;
// }

// const chai = new CreateUser('chai','Chai@google.com','123456');
// console.log(chai)
// Output: CreateUser { email: 'chai@google.com', password : '123456' }
// Here the username is not set because we are not passing  value to SetUsername function not passing the reference of this to SetUsername function.

// To pass the reference of this to SetUsername function we can use call method pass this with the reference of CreateUser to SetUsername function.
function CreateUser(username,email,password){
    SetUsername.call(this,username); 
    this.email = email;
    this.password = password;
}

const chai = new CreateUser('chai','Chai@google.com','123456');
console.log(chai)



