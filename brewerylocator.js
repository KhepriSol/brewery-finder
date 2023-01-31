let map;
let service;
let infoWindow;
let mapKey = "AIzaSyBybEyfduGmfs_d0oWy_90x0T4plbuRWB8";

function initMap() {
  let minneapolis = new google.maps.LatLng(44.9778, -93.2650);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: minneapolis,
    zoom: 12,
  });
  let request = {
    location: minneapolis,
    radius: 5000,
    keyword: "Microbreweries",
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;



