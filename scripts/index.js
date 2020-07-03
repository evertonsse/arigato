const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  const modal = document.querySelector("#modal");
  modal.classList.remove("hide");

  setInterval(() => {
      window.location = "/charade1.html"
  }, 2000);
});
