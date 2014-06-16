$(function() {

var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(33.433702, -111.941948);
  var mapOptions = {
    zoom: 13,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById('map_div'), mapOptions);
};

$('.go').click(function() {
  var address = document.getElementById('zip').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //     map: map,
      //     position: results[0].geometry.location
      // });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
});
// $('#zip').on('click', function(){codeAddress();});
google.maps.event.addDomListener(window, 'load', initialize);

  // // Define Marker properties
  // var image1 = new google.maps.MarkerImage('letter_a.png',
  //     // This marker is 129 pixels wide by 42 pixels tall.
  //     new google.maps.Size(129, 42),
  //     // The origin for this image is 0,0.
  //     new google.maps.Point(0,0),
  //     // The anchor for this image is the base of the flagpole at 18,42.
  //     new google.maps.Point(18, 42)
  // );

  // // Define Marker properties
  // var image2 = new google.maps.MarkerImage('letter_b.png',
  //     // This marker is 129 pixels wide by 42 pixels tall.
  //     new google.maps.Size(129, 42),
  //     // The origin for this image is 0,0.
  //     new google.maps.Point(0,0),
  //     // The anchor for this image is the base of the flagpole at 18,42.
  //     new google.maps.Point(18, 42)
  // );

  // // Add Marker
  // var marker1 = new google.maps.Marker({
  //     position: new google.maps.LatLng(33.431497, -112.056057),
  //     map: map,
  //     icon: image1 // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  // });

  // var marker2 = new google.maps.Marker({
  //     position: new google.maps.LatLng(33.452184, -112.043698),
  //     map: map,
  //     icon: image2 // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  // });

// };





});







