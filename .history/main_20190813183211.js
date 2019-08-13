const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" }
];

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        //main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        //end main game loop
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            alert("Correct!");
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}!`);
        }
    },
    gameOver() {
        alert(`Game Over! Your score: ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);

/*
function start(quiz) {
    let score = 0;

    // main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    // end of main game loop

    gameOver();

    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if (response === answer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        alert(`Game Over! Your score is: ${score} point${score !== 1 ? 's' : ''}`);
    }
}

start(quiz);
*/