const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];
let score = 0; // Initialize score

for (const [question, answer] of quiz) {
    const response = prompt(question);
    if (response === answer) {
        alert("Correct!");
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the Player's score
alert(`Game over! Your score: ${score} point${score !==1 ? 's' : ''}`);