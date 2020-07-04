const button = document.querySelector(".group button");
console.log(button);

button.addEventListener("click", () => {
  const input = document.querySelector("input"); 

  if (input.value == "tripé") {
      alert("HIHIHI, espero de que goste, diotaaaaaaaaaaaa."); 
      window.location = "charade5.html"
  } else {
      alert ("Ops errado...Talvez em outro take.")
  }


});