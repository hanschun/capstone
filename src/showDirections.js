export default function showDirections(map){
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  directionsDisplay.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('go').addEventListener('click', () => {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
};

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var selectedMode = document.getElementById('mode').value;
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  directionsService.route({
    origin: start,
    destination: end,
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
