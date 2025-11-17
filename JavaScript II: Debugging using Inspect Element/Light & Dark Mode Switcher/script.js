const page = document.getElementById("page");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
  page.classList.toggle("dark-mode");
  page.classList.toggle("light-mode");
})
