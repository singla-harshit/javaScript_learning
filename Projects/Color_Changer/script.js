const buttons = document.querySelectorAll('.button');


buttons.forEach( (button) => {
    button.addEventListener('click',function(color){
        const selector = color.target.id;
        document.body.style.backgroundColor= selector;
        button.style.borderColor =selector ;
    })
} )


// console.log(buttons);