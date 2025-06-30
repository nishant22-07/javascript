// Imediately Invoked Function Expression (IIFFE)

// many times global scope pollution causes problems to avoid these we use iife
(function chao() {
    console.log(`DB Connected`);
})();

//after iife function semicolon is important or it will give error like (intermediate value)(...) is not a function

( (name) => {
    console.log(`DB Connected two ${name}`);
    
})("Nishant");