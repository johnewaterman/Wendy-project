
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(29.719553,-95.415931)
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = 'images/map-pin.png';
  var myLatLng = new google.maps.LatLng(29.719553,-95.415931);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
