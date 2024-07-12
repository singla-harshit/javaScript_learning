// const tinderUser = new Object() // Singleton

const tinderUser = {} // Non-Singleton

tinderUser.id = '123abc'
tinderUser.name = 'armaan'
tinderUser.loggedIn= false

// console.log(tinderUser)

const regularUser = {
    email : 'some@gmail.com',
    fullName : {
        userName : {
            firstName : "harshit",
            lastName : "singla"
        }
    }
}

// console.log(regularUser.fullName.username.lastName)

// Combining two objects

// const obj3 = { regularUser, tinderUser}

// const obj3= Object.assign({},regularUser,tinderUser) // using an empty object because it will return as well as update the target object
// so it may cause change in data

// const obj3= {...regularUser,...tinderUser}
// console.log(obj3);


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course = {
    courseInstructor : 'Harshit',
    price : 10000000,
    courseNamee : "how to get rich"
}

console.log(course.courseInstructor);

const {courseInstructor : instructor} = course 
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]