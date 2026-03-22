// Immediately Invoked Function Expressions (IIFE)
/* An IIFE is a JavaScript function that runs immediately after it is defined,
used to create a private scope and avoid polluting the global namespace. */
// Global scope ke variables ke pollution ko hatane keliye IIFE use hota hai..

(function chai(){    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {        // un-named IIFE
    console.log(`DB CONNECTED ${name}`);
} )('Yashvardhan');