// Array to store correct answers
const correctAnswers = ["B", "B", "B", "B"];
// Handel for form
const form = document.querySelector(".quiz-form");


form.addEventListener("submit", (event) => {
    // Stop brower default sumit
    event.preventDefault();
    // Declare and initialise the score
    let score = 0;
    // Array to store Answers from the users
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // Check Answers
    userAnswers.forEach((item, index) => {
        if (item === correctAnswers[index]) {
            score += 25;
        }
    });
    // HAndle to result div
    const result = document.querySelector(".result");
    // Scroll to the top using window Object
    scrollTo(0,0);
    // Timer to animate the result
    let output = 0;
    const timer = setInterval(() => {
        // Show Result into Span
        result.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 10);
    // Remove hidden class
    result.classList.remove("d-none");
    // Timer for result animation
    
});