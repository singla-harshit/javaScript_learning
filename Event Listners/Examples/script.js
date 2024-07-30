const revealBtn = document.querySelector('.reveal-btn')
console.log(revealBtn);
const textToDisplay = document.querySelector('.content')

const displayText = () => {
    revealBtn.style.display = 'block'
    revealBtn.style.height = 'auto'
    revealBtn.style.textAlign = 'center'
    textToDisplay.style.display= 'block'
    revealBtn.innerText = 'See Less'
    revealBtn.style.fontWeight = '600'
    revealBtn.style.textShadow = '2px 2px 2px red'

}

const removeText = () => {
    revealBtn.style.display = 'grid'
    textToDisplay.style.display= 'none'
    revealBtn.style.height='100%'
    revealBtn.innerText = 'Click here to reveal'
    revealBtn.style.textShadow = ''
}
// revealBtn.addEventListener('click',displayText)
// textToDisplay.addEventListener('click',removeText)

function changeContent(){
    if(revealBtn.classList.contains('hello')){
        displayText();
        revealBtn.classList.remove('hello')
    }
    else{
        removeText();
        revealBtn.classList.add('hello')
    }
}

revealBtn.addEventListener('click',changeContent)


