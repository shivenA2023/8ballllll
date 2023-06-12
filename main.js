// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let que = document.getElementById("question").value.toLowerCase();
  console.log(que);
  let randNum = Math.random();
  //Check Passcode
  if (que === "") {
    document.getElementById("output").innerHTML = "Ask a question...";
  } else if (que === "how will i do on the math test") {
    document.getElementById("output").innerHTML = "Great.";
  } else if (que === "are you real") {
    document.getElementById("output").innerHTML = "Go away.";
  } else if (randNum < 0.2) {
    document.getElementById("output").innerHTML = "Without a Doubt.";
  } else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    document.getElementById("output").innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    document.getElementById("output").innerHTML = "Don't count on it.";
  } else if (randNum < 1) {
    document.getElementById("output").innerHTML = "Outlook not so good.";
  }
}
