
let keys = [];
const secret = "38384040373937396665"; // Konami code keycodes

window.addEventListener("keydown", (e) => {
  keys.push(e.keyCode);
  if (keys.join("").includes(secret)) {
    alert("Konami Code Activated! Secret game unlocked!");
    window.location.href = "games/secret.html";
  }
});
