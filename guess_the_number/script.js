const input = document.getElementById("guessInput");
const result = document.getElementById("result");
const score = document.getElementById("score");

let random = Math.floor(Math.random() * 10);
let currentScore = 0;

console.log("Random number:", random);

// Handle input when user presses Enter
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const inputValue = parseInt(input.value);
        
        if (inputValue === random) {
            result.value = "You won!";
            currentScore += 1;
        } else {
            result.value = "You lose!";
            currentScore -= 1;
        }

        score.value = currentScore;
        
        // Optional: generate new number after each guess
        random = Math.floor(Math.random() * 10);
        console.log("New random number:", random);

        // Clear input
        input.value = "";
    }
});
