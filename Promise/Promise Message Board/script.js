let button = document.getElementById("showBtn");
let message = document.getElementById("message");

function getRandomMessage() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(Math.random() > 0.5) {
        resolve("Message loaded successfully!")
      } else {
        reject("Something went wrong!")
      }
    }, 2000);
  });
  return promise;
}

button.addEventListener("click", function() {
  button.disabled = true;
  message.textContent = "Loading message...";
  message.style.color = "black";

  getRandomMessage()

  .then(function(successMsg) {
    message.textContent = successMsg;
    message.style.color = "green";
    button.disabled = false;
  })
  .catch(function(errorMsg) {
    message.textContent = errorMsg;
    message.style.color = "red";
    button.disabled = false;
  })
})
