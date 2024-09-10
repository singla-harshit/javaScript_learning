// const preHeatOven = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const ovenHeated = true;
//       if (ovenHeated) {
//         resolve("Oven is ready to bake");
//       } else {
//         reject("Task is failed");
//       }
//     }, 2000);
//   });
// };
// const addIngredients = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const ingredients = false;
//       if (ingredients) {
//         resolve("Batter is Ready");
//       } else {
//         reject("Task is failed");
//       }
//     }, 2000);
//   });
// };
// const addBakingPowder = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bakingPowder = true;
//       if (bakingPowder) {
//         resolve("Ready to bake");
//       } else {
//         reject("Task is failed");
//       }
//     }, 2000);
//   });
// };

// const bakeBrownies = async () => {
//   try {
//     const taskOne = await preHeatOven();
//     console.log(taskOne);
//     const taskTwo = await addIngredients();
//     console.log(taskTwo);
//     const taskThree = await addBakingPowder();
//     console.log(taskThree);
//   } catch (error) {
//     console.log(error);
//   }
// };

// bakeBrownies();




// fetch('https://dummyjson.com/products')
// .then(res => res)
// .then(console.log);