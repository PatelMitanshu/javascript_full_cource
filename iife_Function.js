// Description: IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// first we define a function and then we call it immediately.
// first bracket is for defining the function and second bracket is for calling the function.
// IIFE is used to avoid polluting the global scope.
// IIFE is used to maintain the privacy of the variables.
// IIFE ends with a semicolon because immediately invoked fuction not end without semicolon .
// IIFE function example
(function chai(){  
    console.log('Hello')
})();

((name) => 
    {console.log(`Hello ${name}`)}
)("Mitanshu");