const user = {
    username : "Harshit",
    id : 23,
    message : function(){
        console.log(`${this.username} , Welcome to my world ` );
    }

}
// user.username = 'Armaan'
// user.message()

// function chai (){
//     const username= 'Harshit'
//     console.log(this.username);
// }

// const chai = function (){
//     const username= 'Harshit'
//     console.log(this.username);
// }

// const chai = () => {
//     const username = 'Harshit'
//     console.log(this.username);
// }
// chai()

// const addTwo = (a,b) => a+b

// const addTwo = (a,b) => {
//     return a+b
// }

// When using curly bracket we have oto use the return keyword but can be avoided using parenthesis
// const addTwo = (a,b) => (a+b)

// e.g. when returning a object 

const addTwo = (a,b) => ({username : "Harshit"})
console.log(addTwo(3,4))