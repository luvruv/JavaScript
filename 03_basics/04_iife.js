// Immediately Invoked Function Expressions (IIFE)


(function dhruva(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('dhruva')

