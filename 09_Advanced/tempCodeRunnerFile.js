const promise = new Promise((resolve,reject)=>{
    const flag = false;
    if(flag){
        resolve('All went well')
    }
    else {
        reject('All went wrong')
    }
})

console.log(promise);