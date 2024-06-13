// Description: Map function in javascript.
// Map is a collection of elements where each element is stored as a Key, value pair.
//map function is not allwoed duplicate keys.
const map = new Map()
map.set('key1', "value1")
map.set('key2', "value2")
map.set('key3', "value3")

// console.log(map)

// example of element access of map function using for of loop 
for (const element of map){
    console.log(element)
}
// print key and value separately using for of loop
for (const[key,value] of map){
    console.log(key, value)
}

//object access using for of loop

const user={
    username:'Mitanshu',
    Email:'Mitanshu@gmail.com',
}
//  first way to access object using for of loop
for (const key in user){
    console.log(`${key} : ${user[key]}`)
}

// second way to access object using for of loop
for (const [key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}

// access array using call back function and for each loop 
const arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach(function(element){
    console.log(element)
})

// access array using arrow function and for each loop
arr.forEach((item) =>{
    console.log(item)
})


// access array element using saparately` call back fuction  give the reference of function means name of function 
function printMe(item){
    console.log(item)
}

arr.forEach(printMe)

// pass index,item and array in call back function
arr.forEach(function(item,index,arr){
    console.log(item,index,arr)
})

//ForEach Loop returns no value (undefined)
const value = arr.forEach((item)=>{
    console.log(item)
    return item
})
console.log(value)


// In filter function we pass a call back function and it returns a new array with the elements that pass the condition and print or stroring the new variable.   
const MyNumbers = [1,2,3,4,5,6,7,8,9,10]

console.log(MyNumbers.filter((item) => item > 4))

const newnumbers =(MyNumbers.filter((item) => item > 4 ))
console.log(newnumbers)


// In filter function in scope any elememt return any variable or condition use return keyword.
const newnumber = MyNumbers.filter((item) =>{
    return item > 4
})

// using ForEach loop create a new array and satisfy the condition push this element in new array.
const newnums = []

MyNumbers.forEach((item) =>{
    if(item > 4){
        newnums.push(item)
    }
})
console.log(newnums)

// example of filter function using object
const books=[
    {title:'The Alchemist',genre:'fiction',publish:1981,edition: 2004},
    {title:'The Power of Now',genre:'Non-Fiction',publish:1997,edition: 2001},
    {title:'The Power of Subconscious Mind',genre:'History',publish:1963,edition: 2000},
    {title:'The Secret',genre:'Non-Fiction',publish:2006,edition: 2010},
    {title:'The Monk who sold his Ferrari',genre:'Science',publish:1997,edition: 2000},
    {title:'The 5 AM Club',genre:'Fiction',publish:2018,edition: 2020},
    {title:'The 4 Hour Work Week',genre:'History',publish:2007,edition: 2010},
]

// give the only genre of book History

const historyBooks = books.filter((book) =>{return book.genre === 'History'})
console.log(historyBooks)

// give the only value of book published after 2000
const published_2000_After = books.filter((book) =>{return book.publish > 2000})
console.log(published_2000_After)


// chaining of map and filter function means in one filter or map end of the function we can use another filter or map function.
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums =  MyNumbers.map((num)=> num *10)
                           .map((num) => num+1)
                           .filter((num) =>num>=40)
