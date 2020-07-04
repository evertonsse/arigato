const button = document.querySelector(".group button");
console.log(button);

button.addEventListener("click", () => {
  const input = document.querySelector("input");

  if (input.value == "geladeira") {
    alert("Que tal andar um pouco...");
  } else if (input.value == "peristáltico") {
      alert("Parabéns, pôs a cadeira no lugar?")
      window.location = "charade3.html"
  }
});
