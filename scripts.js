const topics = {
    code: "I'm learning JavaScript and how websites become interactive.",
    physics: "I'm exploring physics concepts and how they explain the world around us.",
    chemistry: "I'm learning chemistry and understanding reactions and matter."
};

const topicButtons = document.querySelectorAll(".topic-button");
const topicText = document.getElementById("topic-text");

topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        const topic = button.dataset.topic;
        topicText.textContent = topics[topic];
    });
});

const questions = [
    "Why does ice float on water?",
    "Why is the sky blue?",
    "How do planets stay in orbit?",
    "Why do chemical reactions happen?",
    "How does electricity travel through a wire?"
];

const questionButton = document.getElementById("question-button");
const questionText = document.getElementById("question-text");

questionButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[randomIndex];
});
