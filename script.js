let map;
async function initMap() {
  try {
    const {Map} = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: {lat: 37.5519, lng: 126.9918},
      zoom: 8,
      mapTypeId: "terrain",
    });

    const marker = new google.maps.Marker({
      position: {lat: 37.5519, lng: 126.9918},
      map: map,
      label: "A",
      title: "Seoul",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<p>Capital of South Korea</p>",
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  } 
    catch (error) {
    console.error('Error loading Google Maps:', error);
    }
}