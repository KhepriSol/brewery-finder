"use strict";

document.addEventListener('DOMContentLoaded', function () {
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
  });
});
//# sourceMappingURL=script.dev.js.map
