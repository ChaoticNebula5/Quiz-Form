document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'c',
        q4: 'b',
        q5: 'a'
    };

    let timer = 60;
    const timerElement = document.getElementById('timer');
    let interval = setInterval(updateTimer, 1000);

    function updateTimer() {
        timer--;
        timerElement.textContent = `Time: ${timer}s`;
        if (timer === 0) {
            clearInterval(interval);
            submitQuiz();
        }
    }

    function submitQuiz() {
        clearInterval(interval);
        const form = document.getElementById('quizForm');
        let score = 0;
        for (const [question, answer] of Object.entries(correctAnswers)) {
            const userAnswer = form.elements[question].value;
            if (userAnswer === answer) {
                score++;
            }
        }
        document.getElementById('result').textContent = `Your score: ${score}/5`;
        alert(`Quiz submitted! Your score: ${score}/5`);
    }

    document.querySelector('button[onclick="submitQuiz()"]').addEventListener('click', submitQuiz);
});