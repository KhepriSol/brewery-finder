"use strict";

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
});
//# sourceMappingURL=script.dev.js.map
