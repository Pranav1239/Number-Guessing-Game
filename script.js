const OutputText = document.getElementById('OutputText');
const Btn  = document.getElementById('btn');
const UserInput = document.getElementById('Answer-input');  
const randomNumber = Math.floor(Math.random() * 100) + 1;

Btn.addEventListener("click", function () {
    const userGuess = parseInt(UserInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      OutputText.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }
    if (userGuess === randomNumber) {
        OutputText.textContent = `Congratulations! You guessed the number 🥳🎉`;
        OutputText.style.color = "green";
      } else if (userGuess < randomNumber) {
        OutputText.textContent = "Try a higher number.";
        OutputText.style.color = "red";
      } else {
        OutputText.textContent = "Try a lower number.";
        OutputText.style.color = "red";
      }
    });