const user = {
    username : "Harshit",
    count : 9 ,
    loggedIn : true,

    getUserDetails : function(){
        return (this.loggedIn);
        
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this);
