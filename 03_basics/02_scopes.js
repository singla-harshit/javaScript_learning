//  function one (){
//     const username = "Harshit"
//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);
//    // two()
    
//  }
//  //one() 
//  if(true) {
//     const username= "Harshit"
//     if(username==="Harshit"){
//         const lastname= " Singla"
//         console.log(username+lastname);
//     }
//     console.log(username);
//  }
//console.log(username);

// ******************Diffrent ways to declare a function************************

//In this type of declaration we can call the function before declaring it
console.log(addOne(5)); 
function addOne(num){
    return num+1
}

// But we cant call before declaring by using this method of declaring a fucntion
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))

