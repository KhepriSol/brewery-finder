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


// this does not function as expected.... tried to center the map around minneapolis (see line 8 & 12) but when i launch the HTML in live server, it 
// shows me only 1 map pin at a local brewery here in farmington.  not what i wanted to happen, but at least it pulls SOMETHING???
// i need to work on this more. but clearly running out of time.... will be back on my computer early afternoon to try to work on this more
