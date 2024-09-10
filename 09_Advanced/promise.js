// const promiseOne = new Promise(function(resolve,reject){
//     // DO an async task
//     // DB calls , cryptography , network
//     setTimeout(function (){
//         console.log('Async Task completed');
//         resolve()
//     },3000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2 is commleted");
//         resolve();
//     },6000)
// }).then(function(){
//     console.log('Promise two has been consumed')
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : '@Harshit',class : 9})
//     },8000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username : '@Kushal',class : 9})
//         }
//         else{
//             reject('Error : Something went Wrong')
//         }
//     },10000)
// })

// promiseFour.then()


// freeCodeCamp 

// const promise = new Promise((resolve,reject)=>{
//     const flag = true;
//     setTimeout(()=>{
//         if(flag){
//             resolve('All went well')
//         }
//         else {
//             reject('All went wrong')
//         }
//     },2000)
// })



// const promise2 = new Promise((resolve,reject)=>{
//     const num = Math.floor(Math.random()*10)
//     setTimeout(()=>{
//         if(num<4){
//             resolve('Hehe')
//         }
//         else{
//             reject('Byee Byee')
//         }
//     },2000)
// })

// promise2.then((value)=>{
//     console.log(value);
    
// }).catch((value)=>{
//     console.log(value);
    
// })



// const promiseOne = new Promise((resolve,reject)=>{
//     resolve('Promise One is resolved')
// })
// const promiseTwo = new Promise ( (resolve,reject)=>{
//     reject("Promise two is also resolved")
// });
// const promiseThree = new Promise((resolve,reject)=>{
//     reject('Promise three is rejected')
// })

// promiseOne
// .then((value)=>{
//     console.log(value);
//     return promiseTwo
// })
// .then((value)=>{
//     console.log(value);
//     return promiseThree
// })
// .catch((value)=>{
//     console.log(value)
// })

// Promise.all([promiseOne,promiseTwo,promiseThree])
// .then((value)=>{
//     console.log(value[0],value[1],value[2]);
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// ## This method is used to check is every promise is working altogether or when the working of all promise is necessary 
// It will only show the rejected promise is any one of the promise gets rejeced
// Also it wil show the first promise that is rejected


