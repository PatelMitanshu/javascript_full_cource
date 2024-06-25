class user{
    constructor(password, name){
        this.name=name
        this.password=password
    }

    // get is used to get the value of the password When user can get the value of the password change the value of the password and return the value of the password
    get password(){
       return `${this._password}hello`        
    }

    // set is used to set the value of the password
    set password(value){
        this._password= value
    }

}

const customer = new user("123","mitanshu")

console.log(customer.password)