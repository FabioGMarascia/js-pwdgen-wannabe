const nome = prompt("Inserisci Nome");

const cognome = prompt("Inserisci Cognome");

const colore = prompt("Inserisci Colore");

const password = nome + cognome + colore + "#24";

document.getElementById("password").innerHTML = password;

document.getElementById("user-data").innerHTML =
  "La tua password è: " + password;

alert(password);
