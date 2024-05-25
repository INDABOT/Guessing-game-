function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const randomNumber = getRandomInt(1, 100);
const feedback = document.getElementById('feedback');

document.getElementById('button').addEventListener('click', function(){
    const inputElement = document.getElementById('number'); //gets the input element ID
    const inputValue = parseInt( inputElement.value, 10);
    if (inputValue === randomNumber){
        feedback.innerHTML = 'congrats you won';
    } else if (inputValue < randomNumber){
        feedback.innerText = ' too low try again';
    }else if (inputValue > randomNumber){
        feedback.innerText = 'too high try again';
    }
});