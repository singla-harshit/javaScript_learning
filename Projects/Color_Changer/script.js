const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", function (color) {
    const selector = color.target.id;
    document.body.style.backgroundColor = selector;
    button.style.borderColor = selector;
  });
});


// const getID= document.getElementById('red')
// console.log(getID);

// const getClass = document.getElementsByClassName('button')
// console.log(getClass);

// const querClass = document.querySelectorAll('.button')
// console.log(querClass);
// console.log(buttons);

// const redbox = document.querySelector('#red')

// console.log(redbox);
// redbox.style.backgroundColor='green'

// const colors = document.querySelectorAll(".button");
// console.log(colors);

// colors.forEach((each) => {
//   each.style.borderColor = "green";
//   each.style.borderRadius = "30px";
// });

// Creating Elements
const container = document.querySelector(".colors");
const div = document.createElement("div");

// Adding the element
container.append(div);

// Modifying the text
// There are three options - innerHTML , innerText , textContent
// innerText is safer to use 
// div.innerText = 'Hello World'
div.style.backgroundColor = 'pink'
// console.log(div.innerHTML);
// div.innerHTML = '<span> Hello World </span>'
// console.log(div.innerHTML);

// Modifying Attributes and Classes
// div.setAttribute('class','button')
// div.setAttribute('id','pink ')
// // Removing attributes
// div.removeAttribute('id')

// Another useful function "classList"
// div.classList.add('button')
// div.classList.remove('button')


// Removing an element
// console.log(div);
// div.remove()