//************************************************************************************************************************************************* */
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
      query: "Microbreweries",
      fields: ["name", "geometry"],
    };
  
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
  
        map.setCenter(results[0].geometry.location);
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


// document.addEventListener("DOMContentLoaded", () => {
//     let s = document.createElement("script");
//     document.head.appendChild(s);
//     s.addEventListener("load", () => {
//         console.log("script has loaded");
//         map = new google.maps.Map(document.getElementById("map"), {
//             center: {
//                 lat: 44.9778,
//                 lng: -93.2650,
//             },
//             zoom: 12,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         });
//     });
//     s.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initMap`
// });

