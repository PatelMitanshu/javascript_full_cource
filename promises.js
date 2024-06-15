// first promise is defined and used to resolve and reject the promise 
// in this promise is store in variable promiseOne this is not mandatory to store the promise in variable
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise is resolved")
        // resolve the promise means no any error  in the code 
        // resolve when ever write it provide the call back function to be executed after the promise is resolved
        resolve({name: "Rahul", age: 25})
    }, 1000);
})
   // resolved is provide call back function pass the function to be executed after the promise  is resolved by using .then()
  
    promiseOne.then(function (){
        console.log("Promise One is resolved")
    })

     // in this function we can pass parameter to the function
    promiseOne.then(function (data){
        console.log("Promise One is resolved with data", data)
    }
    );

    // below code promise is not stored in variable when we are not storing the promise in variable execute the promise directly after the promise is resolved .then() is called
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise is resolved")
        resolve()
    }, 1000);
}).then(function (){   
    console.log("Promise Two is resolved")
})
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        // if error is true then reject the promise and if error is false then resolve the promise pass the data to the resolve function
        if(!error){
            resolve({name: "Rahul", age: 25})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
// in this function we can access the data from the promise and also catch the error if any error is there
promiseThree
.then(function (user){
    console.log(user)
    // return the age of the user to the next .then() function it called the chaining of the promises
    return user.age
})
.then(function (age){
    console.log(age)
})
// catch the error if any error is there in the promise
.catch(function (error){
    console.log(error)
})
// finally is called after the promise is settled either resolved or rejected
.finally(() => console.log("Promise is settled"))

promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({name: "Rahul", age: 25})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

// async function is used to make the function asynchronous and await is used to wait for the promise to be resolved

async function fetchData(){
  const user = await promiseFour
  console.log(user)
}

fetchData()
// when the promise is resolved then the data is stored in  variable but when the promise is rejected then async function stop the execution of the code and show the error not handle the error  this problem is solved by using try and catch block
async function fetchData(){
try{
    const user = await promiseFour
    console.log(user)
  } 
catch (error){
      console.log(error)
  }
}
fetchData()

async function getAllUser(){
    try{ 
        // fetch is used to fetch the data from the api and await is used to wait for the data to be fetched 
        // in fetch provide the promise and then convert the response to json format
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // data can be converted to json format by using response.json() awiat is used to wait for the data to be converted to json format
        const data = await response.json()
        console.log(data)
    }
    catch (error){
        console.log(error)
    }
}
getAllUser()

// abouve code is written in the form of async function but we can also write the code using .then() and .catch() method 
// .then() and .catch()  use after fetch directly because fetch return the promise 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})

