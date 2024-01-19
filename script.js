document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("welcome-aboard").disabled = true;
  document.getElementById("welcome-back").disabled = true;
)}

function welcomeNewUser(){
  document.getElementById("hello").disabled = true;
  let username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  let passcode = document.getElementById("passcode").value;
  localStorage.setItem("passcode", passcode);
  let town = document.getElementById("town").value;
  localStorage.setItem("town", town);
  let state = document.getElementById("state").value;
  localStorage.setItem("state", state);
}
function welcomePastUser(){
  document.getElementById("hello").disabled = true;
  document.getElementByID("welcome-back").disabled = false;
  let username = document.getElementById("username").value;
  let passcode = document.getElementById("passcode").value;
}
function helloThere(){
  document.getElementById("hello").disabled = true;
  document.getElementById("welcome-aboard").disabled = false;
  document.getElementById("welcome-back").disabled = true;
}
function goodToSeeYouAgain(){
  document.getElementById("hello").disabled = true;
  docu
}

