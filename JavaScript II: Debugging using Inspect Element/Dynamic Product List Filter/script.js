const searchBox = document.getElementById("searchBox");
const products = document.querySelectorAll("#productContainer p");

searchBox.addEventListener("input", function () {
    const text = searchBox.value.toLowerCase();

    products.forEach(product => {
      const name = product.textContent.toLowerCase();

      if (name.includes(text)) {
        product.style.display = "block";  
      } else {
        product.style.display = "none"; 
      }
    });
});
