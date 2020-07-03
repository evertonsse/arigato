const user = document.querySelector("#user");
const pass = document.querySelector("#password");

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (user.value == "Juliana" && pass.value =="0407"){
     
    window.location = "index.html"
  }
});
