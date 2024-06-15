// reduse function is used to reduce the array to a single value
// it takes two argument first is call back function and second is initial value in call back function it takes two argument first is accumulator and second is current value 
// accmulater is initial value is defined in second argument of reduce function initial value
// current initial value is first element of array
// when fuction is called first time accumulator is initialized with initial value
// fuction value is returned and stored in accumulator and this value is passed to next iteration as accumulator and next element of array is passed as current value

// example of reduce function with simple function
const myNums=[1,2,3,4,5,6,7,8,9,10];

const myTotal = myNums.reduce(function(acc,curr){  
    return acc+curr
     },0)

console.log(myTotal)

// example of reduce function with arrow function
const myTotal1 = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal1)


//  example of reduce function with object

const courses=[{
    itemName:'JavaScript',
    price:1000,
},
{
    itemName:'React',
    price:2000,
},
{
    itemName:'Node',
    price:1500,
},
{
    itemName:'MongoDB',
    price:1200,
},
{
    itemName:'Express',
    price:1300,
},
]

const total = courses.reduce((acc,curr)=>{
    return acc+curr.price
})


//Thank you to Hitesh Choudhary sir for teaching us
