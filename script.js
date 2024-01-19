document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("welcome-aboard").disabled = true;
  document.getElementById("welcome-back").disabled = true;
)}

function welcomeNewUser(){
  let username = document.getElementById("username").value;
  let passcode = document.getElementById("passcode").value;
  let town = document.getElementById("town").value;
  let state = document.getElementById("state").value;
}
