"use strict";

var userNameSpan = document.querySelector("#yourName");
var userFavoriteSpan = document.querySelector("#favoriteBeer");
var submitButton = document.querySelector("#submitButton");
var msgDiv = document.querySelector("#msg"); //random beer genorator api

document.addEventListener('DOMContentLoaded', function () {
  var startBtn = document.querySelector('.beer-button');
  var randomBeer = document.querySelector('.random-beer');
  var descriptionDisplay = document.querySelector('.description');

  function getData() {
    fetch('https://api.punkapi.com/v2/beers/random').then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      var name = data[0].name;
      console.log(name);
      var description = data[0].description;
      console.log(description);
      var volume = data[0].volume;
      var volumeValue = volume.value;
      var volumeUnit = volume.unit;
      console.log(volumeUnit);
      console.log(volumeValue);
      randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit;
      descriptionDisplay.innerHTML = description;
    });
  }

  startBtn.addEventListener('click', getData);
  var submitButton = document.querySelector("#submitButton");
  var yourName = document.querySelector("#yourName");
  var favoriteBeer = document.querySelector("#favoriteBeer");
  var userNameSpan = document.querySelector("#userName");
  var userFavoriteSpan = document.querySelector("#userFavorite");
  var msgDiv = document.querySelector("#msg");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (yourName.value === "") {
      displayMessage("error", "You forgot to enter your name!");
    } else if (favoriteBeer.value === "") {
      displayMessage("error", "You forgot to enter your favorite beer!");
    } else {
      displayMessage("success", "Registered successfully");
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("favoriteBeer", favoriteBeer.value);
      renderLastRegistered();
    }
  });

  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  function renderLastRegistered() {
    var yourName = localStorage.getItem("yourName");
    var favoriteBeer = localStorage.getItem("favoriteBeer");

    if (!yourName || !favoriteBeer) {
      return;
    }

    userNameSpan.textContent = yourName;
    userFavoriteSpan.textContent = favoriteBeer;
  }

  renderLastRegistered();
});
//# sourceMappingURL=script.dev.js.map
