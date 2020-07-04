const button = document.querySelector(".group button");
console.log(button);

button.addEventListener("click", () => {
  const input = document.querySelector("input");

  if (input.value != "WESTWORLD" && input.value != "westworld") {
    alert("Resposta errada, pense mais um pouco");
  } else if (input.value == "westworld") {
    alert("Digite do jeito CERTO.");
  } else if (input.value == "WESTWORLD") {
    alert("Parabéns, essa foi fácil...Vamos à próxima");
    window.location = "charade2.html";
  }
});
