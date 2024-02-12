// Immediately Invoked Function Expressions(IIFE)
(function chai() {
    console.log(`db Connected`);
})();

//To avoid global scope pollution we use IIFE (function declaration)(function calling)

( () => {
    console.log(`DB Connected`);
})();

( (n1,n2) => {
    console.log(n1+n2);
})(2,3);