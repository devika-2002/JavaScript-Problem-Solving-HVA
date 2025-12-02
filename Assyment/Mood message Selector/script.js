const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const angryBtn = document.getElementById("angryBtn");
const tiredBtn = document.getElementById("tiredBtn");
const excitedBtn = document.getElementById("excitedBtn");

const moodMessage = document.getElementById("moodMessage");

function removeHighlight(){
    happyBtn.style.backgroundColor = "";
    sadBtn.style.backgroundColor = "";
    angryBtn.style.backgroundColor = "";
    tiredBtn.style.backgroundColor = "";
    excitedBtn.style.backgroundColor = "";
}

happyBtn.addEventListener("click", function() {
    moodMessage.textContent = "Great! Keep smiling today!";
    removeHighlight();
    happyBtn.style.backgroundColor = "blue";
})

sadBtn.addEventListener("click", function() {
    moodMessage.textContent = "It's okay to feel down. Take a deep breath.";
    removeHighlight();
    sadBtn.style.backgroundColor = "blue";
})

angryBtn.addEventListener("click", function() {
    moodMessage.textContent = "Try stepping away for a moment.";
    removeHighlight();
    angryBtn.style.backgroundColor = "blue";
})

tiredBtn.addEventListener("click", function() {
    moodMessage.textContent = "Make sure to rest and recharge.";
    removeHighlight();
    tiredBtn.style.backgroundColor = "blue";
})

excitedBtn.addEventListener("click", function() {
    moodMessage.textContent = "Love the energy! Keep it going!";
    removeHighlight();
    excitedBtn.style.backgroundColor = "blue";
})

