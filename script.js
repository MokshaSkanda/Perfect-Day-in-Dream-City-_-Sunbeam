const quiz = document.getElementById("buzzfeed-quiz");
const results = document.getElementById("results");

quiz.addEventListener("submit", function(event) {
    event.preventDefault();

    let scores = {
        "Paris": 0,
        "Bali": 0,
        "LosAngeles": 0,
        "Athens": 0
    };

    const answers = document.querySelectorAll(
        '#buzzfeed-quiz input[type="radio"]:checked'
    );

    answers.forEach(function(answer) {
        scores[answer.value]++;
    });

    let winner = "Paris";
    let highestScore = -1;

    for (let city in scores) {
        if (scores[city] > highestScore) {
            highestScore = scores[city];
            winner = city;
        }
    }

    quiz.style.display = "none";
    results.style.display = "block";

    document.querySelectorAll(".result").forEach(function(result) {
        result.style.display = "none";
    });

    document.getElementById(winner).style.display = "block";
});
