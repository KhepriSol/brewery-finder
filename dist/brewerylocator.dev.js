"use strict";

var map;
var service;
var infoWindow;
var searchBox;
var mapKey = "AIzaSyBybEyfduGmfs_d0oWy_90x0T4plbuRWB8";

function initMap() {
  var minneapolis = new google.maps.LatLng(44.9778, -93.2650);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: minneapolis,
    zoom: 12
  });
  var input = document.getElementById("search-input");
  searchBox = new google.maps.places.SearchBox(input);
  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });
  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();
    if (places.length == 0) return;
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
    var request = {
      location: map.getCenter(),
      radius: 5000,
      keyword: "Microbreweries"
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    });
  });
  var request = {
    location: map.getCenter(),
    radius: 5000,
    keyword: "Microbreweries"
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;
//# sourceMappingURL=brewerylocator.dev.js.map
