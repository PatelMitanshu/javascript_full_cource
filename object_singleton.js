// const tinderuser = new object ()
// console.log(tinderuser)

const ragularuser={
    fullname:{
      userName:{
        FirstName:"Malvaniya",
        lastName:"Mitanshu"
      }
    }
}
// console.log(ragularuser.fullname.userName.FirstName)

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)
// console.log(ragularuser.hasOwnProperty('FullName'))

course={
    name:"JS",
    price:1000,
    coueseInstructor:"Mitanshu",
}

const {coueseInstructor: instructor}=course
console.log(instructor)


//Thank you to Hitesh Choudhary sir for teaching us
