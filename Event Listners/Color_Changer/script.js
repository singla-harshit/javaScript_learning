// Event Listners

// Basic syntax

// element.addEventListner('click',function)
const thirdBut = document.querySelector('#blue>button')
// console.log(thirdBut);
thirdBut.addEventListener('click',alertbtn)

function alertbtn(){
  alert("This alert is through event listners")
}


const fourthBut = document.querySelector('#black > button')
fourthBut.addEventListener('mouseover',changecolor)
fourthBut.addEventListener('mouseout',revertColor)

// const revertColor = () => {
//   fourthBut.style.backgroundColor = 'green'
// }
function changecolor(){
  fourthBut.style.backgroundColor = 'pink'
}
function  revertColor (){
  fourthBut.style.backgroundColor = 'black'
}


// I dont know but Some concepts are practiced under

const colors = document.querySelector('.colors')
console.log(colors);
colors.addEventListener('click',function(e){
  const clicked = e.target.parentElement.getAttribute('id')
  console.log(`${clicked} is clicked`);
})

//
const pink = document.createElement('div')
pink.setAttribute('class','button')
pink.setAttribute('id','pink')
pink.style.backgroundColor='pink'
colors.appendChild(pink)
pink.innerHTML='<button>Enter The Button</button>'