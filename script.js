document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("welcome-aboard").disabled = true;
  document.getElementById("welcome-back").disabled = true;
)}

function welcomeNewUser(){
  document.getElementById("hello").disabled = true;
  let username = document.getElementById("username").value;
  let passcode = document.getElementById("passcode").value;
  let town = document.getElementById("town").value;
  let state = document.getElementById("state").value;
}
function welcomePastUser(){
  document.getElementById("hello").disabled = true;
  let username = document.getElementById("username").value;
  let passcode = document.getElementById("passcode").value;
}
function helloThere(){
  
}
