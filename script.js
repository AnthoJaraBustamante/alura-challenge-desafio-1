const input = document.getElementById("input");
const notFound = document.getElementById("not-found");
const found = document.getElementById("found");
const outputText = document.getElementById("output-text");
const copyButton = document.getElementById("copy-button");

var cacheMessage = "";

function validateMessage() {
  if (input.value == "") {
    notFound.style.display = "table-cell";
    found.style.display = "none";
    copyButton.style.display = "none";
    cacheMessage = "";
    return false; 
  }
  return true;
}
function encrypt() {
  if (!validateMessage()) {
    return;
  }
  notFound.style.display = "none";
  found.style.display = "inline-block";
  copyButton.style.display = "block";

  var encryptedText = "";
  for (let index = 0; index < input.value.length; index++) {
    const element = input.value[index];
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    if (element === "e") {
      encryptedText += "enter";
    } else if (element === "i") {
      encryptedText += "imes";
    } else if (element === "a") {
      encryptedText += "ai";
    } else if (element === "o") {
      encryptedText += "ober";
    } else if (element === "u") {
      encryptedText += "ufat";
    } else {
      encryptedText += element;
    }
  }
  outputText.innerHTML = encryptedText;
  cacheMessage = encryptedText;
  input.value = "";
}
function decrypt() {
  if (!validateMessage()) {
    return;
  }
  notFound.style.display = "none";
  found.style.display = "block";
  copyButton.style.display = "block";
  var decryptedText = input.value;
  decryptedText = decryptedText.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");

  outputText.innerHTML = decryptedText;
  input.value = "";
  cacheMessage = decryptedText;
}
function copy() {
  navigator.clipboard.writeText(cacheMessage);
  copyButton.innerHTML = "Copiado";
  setTimeout(() => {
    copyButton.innerHTML = "Copiar";
  }, 1200);
}
