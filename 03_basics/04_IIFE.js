(function message(){
    // Named iffe
    console.log("Database Connected")
})();

// After using a IIFE we need to end it using a semicolon because it dont know when to end

( () => {
    console.log("Ek vaar hor");
} )();

( (name) => {
    console.log(`My name is ${name}`);
}) ("Harshit");