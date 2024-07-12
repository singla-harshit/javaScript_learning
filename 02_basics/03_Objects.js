// Singleton 
// Object.create

// Object literals

const mySym = Symbol("Key")

const jsUser = {
    12 : "harshit",
    roll : 2310990685,
    [mySym] : 1,
    group : 'G9',
    Active : true,
    nonWorkingDays : ['Saturday', 'Sunday']
}
// console.log(jsUser.roll); 
// console.log(jsUser["roll"]); // This method is used more bcaz in case the key has a space the above method fails
// console.log(jsUser[mySym]);
// console.log(jsUser);
// Here mySym is a string to make it a symbol we have to put square brackets around in teh object

// To stop the valus of the object from changing we use freeze method
// jsUser["roll"]=2310
// Object.freeze(jsUser)
// jsUser["roll"]=2310990685
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hey this is jsUser")
}
jsUser.greeting2 = function(){
    console.log(`Hey this is ${this.roll}`)
}
