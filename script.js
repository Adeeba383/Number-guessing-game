
const minNumb = 1;
const maxNumb = 100;

let Numb = document.getElementById("Number");
let buttons = document.getElementsByClassName("buttons");
const answer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;

let currentValue = "";
for (let i = 0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        let buttonValue = buttons[i].textContent;

        if (buttonValue === "Start"){
            currentValue = ""
            Numb.textContent = "Game is starting! ";
        }
        else if (buttonValue === "="){
            checkGuess();
        }
        else {
            currentValue += buttonValue;
            Numb.textContent = "You entered: " + currentValue;
        }
        
    };    
}

function checkGuess(){
    
    let guess = Number(currentValue);
    if (isNaN(guess) || guess > maxNumb || guess < minNumb){
        Numb.textContent = "Invalid Number";
    }
    else{
        
        if (guess > answer){
            Numb.textContent = "The Number is too high";
        }
        else if(guess < answer){
            Numb.textContent = "The Number is too low";
        }
        else {
            Numb.textContent = "Correct Answer! ";   
        }
    }
    currentValue = "";
}






