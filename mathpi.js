// getOwnPropertyDescriptor() method is used to get hidden properties of an object.
 const math=Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(math);
 // can't change the value of PI property because it is  disabled by the property descriptor.

// create a new object 
const chai={
    name: 'ginger chai',
    price:20,
    isAvilable: true,

        orderChai: function(){
            console.log('order chai');
        }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'price'));
// output: { value: 20, writable: true, enumerable: true, configurable: true }

// change the writable property to false and enumerable property to false
Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// output: { value: 'ginger chai', writable: false, enumerable: false, configurable: false }

// for (let [key, value] of chai) {
//     console.log(key, value);
// }
// output: TypeError: chai is not iterable
// so we can use entries() method to iterate over the object
for (let [key, value] of Object.entries(chai)) {
    console.log(key, value);
}

for (let[key,value] of Object.entries(chai)){
    console.log(key, value);
}
// output:price 20 isAvilable true orderChai [Function: orderChai]

// when we can not diplay the function in the object using Object.entries() method we can use the below code


for (let[key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(key, value);
    }
}

// thank you to Hitesh Choudhary for the wonderful explanation of the Object.getOwnPropertyDescriptor() method 