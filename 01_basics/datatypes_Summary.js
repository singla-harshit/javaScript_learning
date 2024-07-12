// Primitive 

// 7 types : Strings , Symbol , Nunmber , Null , Boolean , BigInt , Undefined

const Sym = Symbol('123') 
const Sym2 = Symbol('123') 
console.log(Sym)
console.log(Sym2)
console.log(Sym==Sym2);

const bigNum = 124728472538n
// use n at the end of the number to make it a bigInt

// Reference (Non - Primitive)

// Array, Object, Functions

const R610 = ["Harshit","Armaan","Anirudh","Mahak"]

const _yObj = {
    name : "Harshit",
    age : 18
}

const myFunction = function(){
    console.log("Harhsit")
}

console.log(typeof myFunction) // It is called a object function

// Stack (Primitive) && Heap (Non-Primitive)