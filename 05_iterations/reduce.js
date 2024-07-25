const myNums = [1,2,3,4,5,6,7,8,9,10]

const reducedVal = myNums.reduce((accumulator,b)=>{
    // console.log(accumulator);
    return accumulator + b }
    ,10 )
console.log(reducedVal);

const myArrObj =[{x : '1'},{x : "2"},{x : "3"}]

const reducedArrObj = myArrObj.reduce( (accumulator,obj)=>{
    return accumulator + obj.x} , '')

console.log(reducedArrObj);

