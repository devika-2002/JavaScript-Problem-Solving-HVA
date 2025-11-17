const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", function() {
    const length = textInput.value.length;

    charCount.textContent = "Characters: " + length + " / 100";

    if (length < 100) {
        charCount.style.color = "black";
    } else {
        charCount.style.color = "red";
    }
});

