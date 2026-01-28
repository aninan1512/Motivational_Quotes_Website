const quotes = {
    stress: [
        "Take a deep breath. This too shall pass.",
        "You are stronger than your stress.",
        "Slow down. Peace begins with a calm mind.",
        "Rest is not quitting; it is preparing."
    ],
    failure: [
        "Failure is not the opposite of success; it’s part of success.",
        "Every failure is a lesson in disguise.",
        "Mistakes are proof that you are trying.",
        "Fall seven times, stand up eight."
    ],
    success: [
        "Success is the sum of small efforts repeated daily.",
        "Stay humble. Stay hungry.",
        "Success feels better when earned.",
        "Discipline beats motivation."
    ],
    loneliness: [
        "You are never alone. You matter.",
        "Loneliness is a moment, not a life sentence.",
        "Your presence has value.",
        "This chapter is not your whole story."
    ],
    motivation: [
        "Start where you are. Use what you have.",
        "Dream big. Act bigger.",
        "Your future self will thank you.",
        "Do something today your future self will appreciate."
    ]
};

const backgrounds = {
    stress: "images/stress.jpg",
    failure: "images/failure.jpg",
    success: "images/success.jpg",
    loneliness: "images/loneliness.jpg",
    motivation: "images/motivation.jpg"
};

let currentSituation = null;
let shuffledQuotes = [];
let currentIndex = 0;

/* Fisher-Yates shuffle */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuotes() {
    const situation = document.getElementById("situationSelect").value;
    const quoteText = document.getElementById("quoteText");

    if (!situation) {
        quoteText.textContent = "Please select a situation first.";
        return;
    }

    currentSituation = situation;
    document.body.style.backgroundImage = `url('${backgrounds[situation]}')`;

    shuffledQuotes = shuffleArray([...quotes[situation]]);
    currentIndex = 0;

    showQuoteWithFade();
}

function nextQuote() {
    if (!currentSituation) return;

    if (currentIndex >= shuffledQuotes.length) {
        shuffledQuotes = shuffleArray([...quotes[currentSituation]]);
        currentIndex = 0;
    }

    showQuoteWithFade();
}

function showQuoteWithFade() {
    const quoteText = document.getElementById("quoteText");
    quoteText.style.opacity = 0;

    setTimeout(() => {
        quoteText.textContent = shuffledQuotes[currentIndex];
        quoteText.style.opacity = 1;
        currentIndex++;
    }, 400);
}
