const myArray = ['js','cpp','rb','Java','C#']

// myArray.forEach(function(item){
//     console.log(item);
// })


// myArray.forEach((value)=>{
//     console.log(`This is a iteration for ${value}`);
// })


// We can also pass on a function reference directly
// const func = (item) =>{
//     console.log(`This is a iteration for ${item} haha`)
// }
// myArray.forEach(func)


// forEach have the access to the item index and the whole arr itself
// myArray.forEach((value,index,arr) => {
//     console.log(value , index , arr);
// })

const myCoding = [
    {
        language : 'Javascript',
        extension : '.js'
    },
    {
        language : 'Pyton',
        extension : '.py'
    },
    {
        language : 'Ruby',
        extension : '.rb'
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
    console.log(item.extension);
})

