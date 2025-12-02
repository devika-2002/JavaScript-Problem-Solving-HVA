const textInput = document.getElementById("textInput");
const displayText = document.getElementById("displayText");

const textColorBtn = document.getElementById("textColorBtn");
const bgColorBtn = document.getElementById("bgColorBtn");
const bigTextBtn = document.getElementById("bigTextBtn");

textColorBtn.addEventListener("click", function() {
    displayText.textContent = textInput.value;
})

bgColorBtn.addEventListener("click", function() {
    if (displayText.style.color == "blue") {
        displayText.style.color = "black";
        textColorBtn.textContent = "Add Text Color"
    } else {
        displayText.style.color = "blue";
        textColorBtn.textContent = "Remove Text Color";
    }
})

bgColorBtn.addEventListener("click", function () {
  if (displayText.style.backgroundColor === "yellow") {
    displayText.style.backgroundColor = "";
    bgColorBtn.textContent = "Add Background Color";
  } else {
    displayText.style.backgroundColor = "yellow";
    bgColorBtn.textContent = "Remove Background Color";
  }
});

bigTextBtn.addEventListener("click", function () {
  if (displayText.style.fontSize === "24px") {
    displayText.style.fontSize = "16px";
    bigTextBtn.textContent = "Make Text Bigger";
  } else {
    displayText.style.fontSize = "24px";
    bigTextBtn.textContent = "Make Text Normal";
  }
});

