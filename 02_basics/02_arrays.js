const marvelHeros = ["Ironman","Spiderman","Thor"]
const dcHeros = ["Superman","flash","Batman","Joker"]
const trial=[1,2,3]

// marvelHeros.push(dcHeros) // array is itself taken as a entry in the other array
// console.log(marvelHeros); 

// const combHeros= marvelHeros.concat(dcHeros,trial) // This returns a new array instead of modifying
// console.log(combHeros)

// Another method to perform this combination is to use the spread method(...)
// const combHeros= [...marvelHeros,...dcHeros,...trial]
// console.log(combHeros);

//In this case to remove various sub arrays and use them as a single array we use flat method
// const someArray = [1,2,3,[4,5,[6,7]],[8,9]]
// const mod_someArray = someArray.flat(Infinity) // you can also use how much depth u want
// console.log(mod_someArray);

// Checking and converting to a array
const obj={
    1: "harshit",
    2: "hitesh"
}
const name= 'Harshit'
console.log(Array.isArray(name))
console.log(Array.from(name));
console.log((Object.values(obj)))  
