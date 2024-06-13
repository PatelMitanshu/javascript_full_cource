function calculatecarprice(...num1){
    return num1
}

// console.log(calculatecarprice(1,2,3,4,5,6,7,8,9,10))

function calculatecar(num1,num2,...num3){
    return num3
}

// console.log(calculatecar(1,2,3,4,5,6,7,8,9,10))

const user={
    username:"Mitanshu",
    price:199
}

function getuserdetails({anyobject}){
    return `${anyobject.username} is ${anyobject.price}`
}

console.log(getuserdetails({anyobject:user}))

const mynewarray=[1,2,3,4,5,6,7,8,9,10] 

function getarray(getarray){
    return getarray[1]``
}

console.log(getarray(mynewarray))

// understanding the concept of function expression
// function expression is a function that is assigned to a variable
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(2))
