let message = document.querySelector(".message");
let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalguess = 0;
message.innerHTML = "Dự đoán con số của bạn nằm trong khoảng từ 1-100";



function onClick(e) {

    let userGuess = parseInt(input.value);
    if (userGuess === randomNumber) {
        alert("guessed right");
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("the correct number : " + randomNumber);


        totalguess = 0;
        return;
    }
    else {
        alert("guessed wrong , input again");
    }
    totalguess++;
    if (totalguess == 3) {
        alert("guess failed , new number");

        randomNumber = Math.floor(Math.random() * 100) + 1;
        totalguess = 0;

        console.log("the correct number : " + randomNumber);


    }

}

button.addEventListener("click", onClick);
console.log("the correct number : " + randomNumber);
