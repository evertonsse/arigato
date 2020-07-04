const button = document.querySelector(".group button");
console.log(button);

button.addEventListener("click", () => {
  const input = document.querySelector("input");

  if (input.value == "DIOTA") {
    alert("Parabéns, RASENGAAAAAN");

    window.location = "charade4.html";
  } else {
      alert("Full ton"); 
  }
});
