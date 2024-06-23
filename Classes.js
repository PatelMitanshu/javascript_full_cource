class User{
    constructor(password, email,username){
        this.email = email;
        this.username = username;
        this.password = password;
    }
        encryptPassword(){
            return (this.password + '1234');
        }
    
}

const user  = new User('hello', 'mitanshu@google.com', 'mitanshu');
console.log(user.encryptPassword());


// behind the scene of class
function User(password, email,username){ 
    this.email = email;
    this.username = username;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return (this.password + '1234');
}

const user_1 = User('hello', 'mitanshu@google.com', 'mitanshu');
console.log(user.encryptPassword());


