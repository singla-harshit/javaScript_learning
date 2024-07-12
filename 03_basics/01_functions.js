// Functions 

function sayMyName(){
    console.log('H');
    console.log('A');
    console.log('R');
    console.log('S');
    console.log('H');
    console.log('I');
    console.log('T');
}

// sayMyName()

function addTwoNum (num1 , num2){
    return num1+num2;
}

function userLogin (username='Default'){
    return  `${username} just logged in`
}

const result = addTwoNum(3,null)
console.log(result);

let userMessage = userLogin ('Harshit')
console.log(userMessage);

// What if we dont pass anything
// We can set a default parameter for the function
userMessage = userLogin ()
console.log(userMessage);

// Passing a Object in a function
const user = {
    name :'harshit',
    roll : 23,
    pass : true
}

function handleObject (anyObject) {
    console.log(`Hey this is ${anyObject.name}`)
    console.log(`The roll No. is ${anyObject.roll}`);

}
handleObject(user)

