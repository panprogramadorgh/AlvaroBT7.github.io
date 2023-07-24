export function caracola(userInput) {
  let phrases = ["Si", "No"];
  if (["que te parece"].includes(userInput.split(" ")[0].toLowerCase())) {
    phrases = ["Mal", "Bien", "Una mierda"];
  } else if (
    ["que", "con", "crees que deberia elegir", "cuanto"].includes(
      userInput.split(" ")[0].toLowerCase()
    )
  ) {
    phrases = ["Ninguno", "Ni uno ni otro", "Una oureo"];
  }
  const index = Math.floor(Math.random() * phrases.length);
  const phrase = phrases[index];
  window.alert(phrase);
}
