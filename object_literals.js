const mysym = Symbol("Key1")
const jsuser={
    name:"Mitanshu",
    [mysym]:"mykey1",
    age:"18",
    Email:"mitansh@gmail.com",
}
// console.log(jsuser.name)
// console.log(jsuser[mysym])

jsuser.Email="mitt@gmail.com"

// Object.freeze(jsuser)

jsuser.greeting = function(){
    console.log("Hello how are you")
}

jsuser.greetingtwo= function(){
    console.log(`hello jsuser, ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())


//Thank you to Hitesh Choudhary sir for teaching us
