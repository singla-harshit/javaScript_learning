let button = document.getElementById('btn')

button.addEventListener('click',function(){
    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value
    const BMI = weight/(height*height)
    console.log(weight,height,BMI);
    const result = document.querySelector('#result')
    
    let status ;
    if(BMI < 18.5 ){
         status = 'underWeight';
    }
    else if(BMI  < 25){
         status = 'Normal';
    }
    else if (BMI < 30){
         status = 'overWeight';
    }
    else if (BMI < 40){
        status = 'Obese';
    }
    else {
        status = 'Ram Ram Satya hai !!';
    }

    result.innerHTML = `Your BMI is ${BMI} <br> You are ${status}`
})